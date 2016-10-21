export const REQUEST_POSTS = 'REQUEST_TRIPS'
export const RECEIVE_POSTS = 'RECEIVE_TRIPS'

export const login = (user_token) => {
  return {
    type: 'LOGIN',
    user: user_token
  }
}

export const specifyUserID = (user_ID) => {
  return {
    type: 'SPECIFY_ID',
    ID: user_ID
  }
}

export const requestTrips = user_data => ({
  type: REQUEST_TRIPS,
  user_data
})

export const receiveTrips = (user_data, json) => ({
  type: RECEIVE_TRIPS,
  user_data,
  trips: json.data
})

const fetchTrips = user_data => dispatch => {
  dispatch(requestTrips(user_data))
  return fetch('/api/trips')
    .then(response => response.json())
    .then(json => dispatch(receiveTrips(user_data, json)))
}
