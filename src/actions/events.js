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

export const WILL_DELETE_EVENT = 'WILL_DELETE_EVENT'
export const deletingEvent = () => {
  return {
    type: WILL_DELETE_EVENT,
    status: 'deleting event'
  }
}

export const DELETED_EVENT = 'DELETED_EVENT'
export const deletedEvent = (id) => {
  return {
    type: DELETED_EVENT,
    deletedEventID: id
  }
}

export function fetchEvents(trip_id) {
  return function (dispatch) {
    dispatch(requestEvents())

    return fetch(`http://localhost:8080/api/users/${localStorage.getItem('user_id')}/trips/${trip_id}/events`)
      .then(response => response.json())
      .then(response => {
        dispatch(receiveEvents(response))
      })
  }
}

export function toDeleteEvent(id) {
  return function (dispatch) {
    dispatch(deletingEvent)
    console.log('hit deleteEvents function, will be fetching')

    return fetch(`http://localhost:8080/api/users/delete-events/${id}`)
      .then(response => response.json())
      .then(response => {
        dispatch(deletedEvent(JSON.parse(response)))
      })
  }
}
