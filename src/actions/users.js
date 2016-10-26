export const REQUEST_USER = 'REQUEST_USER'
export const requestUser = () => {
  return {
    type: REQUEST_USER,
    status: 'Loading tripper'
  }
}

export const RECEIVE_USER = 'RECEIVE_USER'
export const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user
  }
}


export function fetchUser(user_id) {
  return function (dispatch) {
    dispatch(requestUser())

    return fetch(`http://localhost:8080/api/users/${user_id}`)
      .then(response => response.json())
      .then(response => {
        dispatch(receiveUser(response))
      })
  }
}
