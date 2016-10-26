export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const requestLogin = (creds) => {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds
  }
}

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const receiveLogin = (user) => {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    id_token: user.id_token
  }
}

export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const loginError = (message) => {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  }
}

export function loginUser(creds) {

  let config = {
    method: 'POST',
    headers: { 'Content-Type':'application/x-www-form-urlencoded' },
    body: `email=${creds.email}&password=${creds.password}`
  }

  return dispatch => {
    //Dispatch requestLogin to kickoff the call to the API
    dispatch(requestLogin(creds))

    return fetch('http://localhost:8080/api/users/sessions/create', config)
      .then(response =>
        response.json().then(user => ({ user, response }))
            ).then(({ user, response }) =>  {
        if (!response.ok) {

          dispatch(loginError(user.message))
          return Promise.reject(user)

        } else {
          localStorage.setItem('id_token', user.id_token)

          dispatch(receiveLogin(user))
        }
      }).catch(err => console.log("Error: ", err))
  }
}
