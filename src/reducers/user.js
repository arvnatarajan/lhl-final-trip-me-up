import { combineReducers } from 'redux'
import { RECEIVE_USER } from '../actions/user'


export const displayUser = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USER:
      return Object.assign({}, state, {
        user: action.user
      })
    default:
      return state
  }
}

