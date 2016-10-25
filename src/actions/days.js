export const SHOW_DAY_DROPDOWN = 'SHOW_DAY_DROPDOWN'
export const showDayDropdown = (status) => {
  return {
    type: SHOW_DAY_DROPDOWN,
    showDayDropdown: status
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