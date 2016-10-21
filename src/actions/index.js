import fetch from 'isomorphic-fetch'

export const SELECT_USER = 'SELECT_USER'
export function selectUser(user) {
  return {
    type: SELECT_USER,
    user
  }
}

export const REQUEST_TRIPS = 'REQUEST_POSTS'
export function requestTrips(user) {
  return {
    type: REQUEST_TRIPS,
    user
  }
}

export const RECEIVE_TRIPS = 'RECEIVE_TRIPS'
export function receiveTrips(user, json) {
  return {
    type: RECEIVE_TRIPS,
    user,
    trips: json.data
  }
}

export const login = (user_token) => {
  return {
    type: 'LOGIN',
    user: user_token
  }
}

export function fetchTrips(user) {
    return function (dispatch) {
      dispatch(requestTrips(user))
      return fetch('/api/trips')
        .then(response => response.json())
        .then(json => dispatch(receiveTrips(user, json)))
    }
}
