import { combineReducers } from 'redux'
import { RECEIVE_TRIPS, REQUEST_TRIPS, SHOW_MODAL } from '../actions/index'
import { displayUser } from './user'
import { reducer as formReducer } from 'redux-form'

const reducers = {

  form: formReducer,     // <---- Mounted at 'form'

  login: (state = {user: ''}, action) => {
    switch (action.type) {
      case 'LOGIN':
        return Object.assign({}, state, {user: action.user})
    default:
      return state
    }
  },

  displayTrips: (state = {}, action) => {
    switch (action.type) {
      case RECEIVE_TRIPS:
      case REQUEST_TRIPS:
        return Object.assign({}, state, {
          trips: action.trips
        })
      default:
        return state
    }
  },

  showModalForm: (state = {showModal: false}, action) => {
    switch (action.type) {
      case SHOW_MODAL:
        return Object.assign({}, state, {
          showModal: action.showModal
        })
      default:
        return state
    }
  },

  displayUser

}

const rootReducer = combineReducers(
  reducers
)

export default rootReducer
