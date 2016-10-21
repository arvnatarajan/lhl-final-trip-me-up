const login = (state = {user: ''}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {...state, {user: action.user}}
  default:
    return state
  }
} 
