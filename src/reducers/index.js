const login = (state = {user: ''}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return Object.assign({}, state, {user: action.user})
  default:
    return state
  }
}

export default login
