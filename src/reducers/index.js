import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import {  RECEIVE_TRIPS,
          REQUEST_TRIPS,
          RECEIVE_DAYS,
          REQUEST_DAYS,
          REQUEST_USER,
          RECEIVE_USER,
          SHOW_MODAL,
          SHOW_DAY_DROPDOWN
        } from '../actions/index'
import { displayUser } from './user'


const reducers = {

  form: formReducer,     // <---- Mounted at 'form'

  login: (state = {user: ''}, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {...state, user: action.user}
    default:
      return state
    }
  },

  userTrips: (state = {}, action) => {
    switch (action.type) {
      case RECEIVE_TRIPS:
      case REQUEST_TRIPS:
        return  {...state, trips: action.trips}
      default:
        return state
    }
  },

  tripDays: (state = {}, action) => {
    switch (action.type) {
      case RECEIVE_DAYS:
      case REQUEST_DAYS:
        return {...state, days: action.days}
      default:
        return state
    }
  },

  showModalForm: (state = {showModal: false}, action) => {
    switch (action.type) {
      case SHOW_MODAL:
        return {...state, showModal: action.showModal}
      default:
        return state
    }
  },

  showDayDropdown: (state = {false}, action) => {
    switch (action.type) {
      case SHOW_DAY_DROPDOWN:
        return {...state, showDayDropdown: action.showDayDropdown}
      default:
        return state
    }
  },

  user: displayUser

}

const rootReducer = combineReducers(reducers)

export default rootReducer
