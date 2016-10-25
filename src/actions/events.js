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