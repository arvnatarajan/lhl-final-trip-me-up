import { combineReducers } from 'redux'
import { RECEIVE_TRIPS, REQUEST_TRIPS } from '../actions/index'
import { displayUser } from './user'

const login = (state = {user: ''}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return Object.assign({}, state, {user: action.user})
  default:
    return state
  }
}

const displayTrips = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_TRIPS:
    case REQUEST_TRIPS:
      return Object.assign({}, state, {
        trips: action.trips
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  login,
  displayTrips,
  displayUser
})

export default rootReducer
