import fetch from 'isomorphic-fetch'

export const SHOW_MODAL = 'SHOW_MODAL'
export const showModal = (status) => {
  return {
    type: SHOW_MODAL,
    modalStatus: status
  }
}

export const SHOW_DAY_DROPDOWN = 'SHOW_DAY_DROPDOWN'
export const showDayDropdown = (status) => {
  return {
    type: SHOW_DAY_DROPDOWN,
    showDayDropdown: status
  }
}

export const REQUEST_TRIPS = 'REQUEST_TRIPS'
export const requestTrips = () => {
  return {
    type: REQUEST_TRIPS,
    status: 'Loading trips'
  }
}

export const RECEIVE_TRIPS = 'RECEIVE_TRIPS'
export const receiveTrips = (trips) => {
  return {
    type: RECEIVE_TRIPS,
    trips
  }
}

export const REQUEST_DAYS = 'REQUEST_DAYS'
export const requestDays = () => {
  return {
    type: REQUEST_DAYS,
    status: 'Loading days'
  }
}

export const RECEIVE_DAYS = 'RECEIVE_DAYS'
export const receiveDays = (days) => {
  return {
    type: RECEIVE_DAYS,
    days
  }
}

export const REQUEST_EVENTS = 'REQUEST_EVENTS'
export const requestEvents = () => {
  return {
    type: REQUEST_EVENTS,
    status: 'Loading events'
  }
}

export const RECEIVE_EVENTS = 'RECEIVE_EVENTS'
export const receiveEvents = (tripEvents) => {
  return {
    type: RECEIVE_EVENTS,
    tripEvents
  }
}

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

export function fetchTrips(user_id, trips) {
  return function (dispatch) {
    dispatch(requestTrips())

    return fetch(`http://localhost:8080/api/users/${user_id}/${trips}`)
      .then(response => response.json())
      .then(response => {
        dispatch(receiveTrips(response))
      })
  }
}

export function fetchDays(user_id, trip_id, days) {
  return function (dispatch) {
    dispatch(requestDays())

    return fetch(`http://localhost:8080/api/users/${user_id}/trips/${trip_id}/${days}`)
      .then(response => response.json())
      .then(response => {
        dispatch(receiveDays(response))
      })
  }
}
export function fetchEvents(trip_id, events) {
  return function (dispatch) {
    dispatch(requestEvents())

    return fetch(`http://localhost:8080/api/users/1/trips/${trip_id}/${events}`)
      .then(response => response.json())
      .then(response => {
        dispatch(receiveEvents(response))
      })
  }
}
