export const REQUEST_FRIEND_INVITE = 'REQUEST_FRIEND_INVITE'
export const requestFriendInvite = (ID) => {
  return {
    type: REQUEST_FRIEND_INVITE,
    isSending: true,
    friendID: ID
  }
}

export const REQUEST_FRIEND_INVITE_SUCCESS = 'REQUEST_FRIEND_INVITE_SUCCESS'
export const requestFriendInviteSuccess = (ID) => {
  return {
    type: REQUEST_FRIEND_INVITE_SUCCESS,
    friendID: ID
  }
}

export function sendFriendInvite(deets) {

  let config = {
    method: 'POST',
    headers: { 'Content-Type':'application/x-www-form-urlencoded' },
    body: `user_id=${deets.user_id}&notification_type=${deets.notification_type}&notification_message=${deets.notification_message}`
  }

  return dispatch => {
    //Dispatch requestLogin to kickoff the call to the API
    dispatch(requestFriendInvite(deets.user_id))

    return fetch('http://localhost:8080/api/users/notifications/new', config)
      .then(response => {
        console.log(response)
        response.json()
      })
      .then((response) =>  {
          dispatch(requestFriendInviteSuccess(response.user_id))
        }
      )
      .catch(err => console.log("Error: ", err))
  }
}
