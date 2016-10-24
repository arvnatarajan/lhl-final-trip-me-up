import { RECEIVE_USER, REQUEST_USER } from '../actions/user'


export const displayUser = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USER:
    case REQUEST_USER:
      return {...state, user: action.user}
    default:
      return state
  }
}
