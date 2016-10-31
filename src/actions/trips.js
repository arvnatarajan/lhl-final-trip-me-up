import { CALL_API } from '../middleware/api'


export const REQUEST_TRIPS = 'REQUEST_TRIPS'
export const requestTrips = () => {
  return {
    type: REQUEST_TRIPS,
    isFetching: true
  }
}

export const RECEIVE_TRIPS = 'RECEIVE_TRIPS'
export const receiveTrips = (trips) => {
  return {
    type: RECEIVE_TRIPS,
    trips

  }
}

export const FAILURE_TRIPS = 'FAILURE_TRIPS'


export const CLEAR_TRIPS = 'CLEAR_TRIPS'
export const clearTrips = () => {
  return {
    trips: []
  }
}

export function fetchTrips(user) {
  return {
    [CALL_API]: {
      endpoint: `${user}/trips`,
      authenticated: true,
      types: [REQUEST_TRIPS, RECEIVE_TRIPS, FAILURE_TRIPS]
    }
  }
}
