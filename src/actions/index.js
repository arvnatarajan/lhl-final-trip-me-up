import fetch from 'isomorphic-fetch'

export const login = (user_token) => {
  return {
    type: 'LOGIN',
    user: user_token
  }
}

export const REQUEST_TRIPS = 'REQUEST_TRIPS'
export const requestTrips = () => {
  return {
    type: REQUEST_TRIPS,
    trips: [{title: 'Loading trips'}]
  }
}

export const RECEIVE_TRIPS = 'RECEIVE_TRIPS'
export const receiveTrips = (trips) => {
  return {
    type: RECEIVE_TRIPS,
    trips
  }
}

export function fetchTrips(trips) {
  return function (dispatch) {
    dispatch(requestTrips())

    return fetch(`http://localhost:8080/api/${trips}`)
      // .then()
      .then(response => response.json())
      .then(response => {
        dispatch(receiveTrips(response))
      })
  }
}
