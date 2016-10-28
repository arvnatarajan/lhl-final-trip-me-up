import { CALL_API } from '../middleware/api'
import NotificationSystem from 'react-notification-system'

export const REQUEST_FRIEND_INVITE = 'REQUEST_FRIEND_INVITE'
export const requestFriendInvite = (ID) => {
  return {
    type: REQUEST_FRIEND_INVITE,
    isSending: true
  }
}

export const REQUEST_FRIEND_INVITE_SUCCESS = 'REQUEST_FRIEND_INVITE_SUCCESS'
export const requestFriendInviteSuccess = (ID) => {
  return {
    type: REQUEST_FRIEND_INVITE_SUCCESS,
    friendID: ID
  }
}

export const INVITED_FRIEND_NOTIFICATION = 'INVITED_FRIEND_NOTIFICATION'
export const invitedFriendNotification = () => {
  return {
    type: INVITED_FRIEND_NOTIFICATION
  }
}

export const REQUEST_NOTIFICATIONS = 'REQUEST_NOTIFICATIONS'
export const requestNotifications = () => {
  return {
    type: REQUEST_NOTIFICATIONS,
    isFetching: true
  }
}

export const RECEIVE_NOTIFICATIONS = 'RECEIVE_NOTIFICATIONS'
export const receiveNotifications = (notifications) => {
  return {
    type: RECEIVE_NOTIFICATIONS,
    notifications
  }
}

export const REQUEST_NOTIFICATIONS_FAILURE = 'REQUEST_NOTIFICATIONS_FAILURE'


export const CLEAR_NOTIFICATIONS = 'CLEAR_NOTIFICATIONS'
export const clearNotifications = () => {
  return {
    notifications: []
  }
}


export function fetchNotifications(user_id) {
  return function (dispatch) {
    dispatch(requestNotifications())

    return fetch(`http://localhost:8080/api/users/${user_id}/notifications`)
    .then(response => response.json())
    .then(response => {
      console.log(response, 'response')
      dispatch(receiveNotifications(response))
    })
  }
}

export function deleteNotifications(user_id) {
  return fetch(`http://localhost:8080/api/users/${user_id}/delete-notifications`)
  .then(response => response.json())
  .then(response => {
    console.log(response)
  })
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
      .then(response =>
        response.json().then(user => ({ user, response }))
            ).then(({ user, response }) =>  {

              console.log(user[0])
              dispatch(requestFriendInviteSuccess(user[0]))
        }
      )
      .catch(err => console.log("Error: ", err))
  }
}
