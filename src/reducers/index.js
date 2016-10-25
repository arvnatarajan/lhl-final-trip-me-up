import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import {  RECEIVE_TRIPS,
          REQUEST_TRIPS,
          RECEIVE_DAYS,
          REQUEST_DAYS,
          RECEIVE_EVENTS,
          REQUEST_EVENTS,
          REQUEST_USER,
          RECEIVE_USER,
          SHOW_MODAL,
          SHOW_DAY_DROPDOWN
        } from '../actions/index'


const reducers = {

  form: formReducer,     // <---- Mounted at 'form'

  requestTripsLoading: (state = {}, action) => {
    switch (action.type) {
      case REQUEST_TRIPS:
        return {status: action.status}
      default:
        return state
    }
  },

  requestDaysLoading: (state = {}, action) => {
    switch (action.type) {
      case REQUEST_DAYS:
        return {status: action.status}
      default:
        return state
    }
  },

  requestEventsLoading: (state = {}, action) => {
    switch (action.type) {
      case REQUEST_EVENTS:
        return {status: action.status}
      default:
        return state
    }
  },

  requestUserLoading: (state = {}, action) => {
    switch (action.type) {
      case REQUEST_USER:
        return {status: action.status}
      default:
        return state
    }
  },

  user: (state = [], action) => {
    switch (action.type) {
      case RECEIVE_USER:
        return action.user
      default:
        return state
    }
  },

  userTrips: (state = [], action) => {
    switch (action.type) {
      case RECEIVE_TRIPS:
        return action.trips
      default:
        return state
    }
  },

  tripDays: (state = [], action) => {
    switch (action.type) {
      case RECEIVE_DAYS:
        return action.days
      default:
        return state
    }
  },

  tripEvents: (state = [], action) => {
    switch (action.type) {
      case RECEIVE_EVENTS:
        return action.tripEvents
      default:
        return state
    }
  },

  modalStatus: (state = false, action) => {
    switch (action.type) {
      case SHOW_MODAL:
        return action.modalStatus
      default:
        return state
    }
  },

  showDayDropdown: (state = {}, action) => {
    switch (action.type) {
      case SHOW_DAY_DROPDOWN:
        return action.showDayDropdown
      default:
        return state
    }
  }

}

const rootReducer = combineReducers(reducers)

export default rootReducer
