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

export function fetchTrips(user_id, trips) {
  return function (dispatch) {
    dispatch(requestTrips())
<<<<<<< HEAD
    return fetch(`http://localhost:8080/api/users/${user_id}/${trips}`)
=======

    return fetch(`http://localhost:8080/api/${trips}`)
      // .then()
>>>>>>> f4886652b476f368b8c72672bda4e093d8eb64de
      .then(response => response.json())
      .then(response => {
        dispatch(receiveTrips(response))
      })
  }
}
