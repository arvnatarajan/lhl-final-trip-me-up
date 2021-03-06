export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
function requestLogout() {
  return {
    type: LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true
  }
}

export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
function receiveLogout() {
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false
  }
}

export function logoutUser() {
  return dispatch => {
    dispatch(requestLogout())

    localStorage.removeItem('user_id')

    dispatch(receiveLogout())
  }
}


export const LOGOUT_FAILURE = 'LOGOUT_FAILURE'
