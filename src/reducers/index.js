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


const reducers = {

  form: formReducer,     // <---- Mounted at 'form'

  requestTripsLoading: (state = {}, action) => {
    switch (action.type) {
      case REQUEST_TRIPS:
        return {...state, status: action.status}
      default:
        return state
    }
  },

  requestDaysLoading: (state = {}, action) => {
    switch (action.type) {
      case REQUEST_DAYS:
        return {...state, status: action.status}
      default:
        return state
    }
  },

  requestUserLoading: (state = {}, action) => {
    switch (action.type) {
      case REQUEST_USER:
        return {...state, status: action.status}
      default:
        return state
    }
  },

  user: (state = [], action) => {
    switch (action.type) {
      case RECEIVE_USER:
        return [...state, ...action.user]
      default:
        return state
    }
  },

  userTrips: (state = [], action) => {
    switch (action.type) {
      case RECEIVE_TRIPS:
        return [...state, ...action.trips]
      default:
        return state
    }
  },

  tripDays: (state = [], action) => {
    switch (action.type) {
      case RECEIVE_DAYS:
        return [...state, ...action.days]
      default:
        return state
    }
  },


  showModal: (state = {}, action) => {
    switch (action.type) {
      case SHOW_MODAL:
        return {...state, ...action.showModal}
      default:
        return state
    }
  },

  showDayDropdown: (state = {}, action) => {
    switch (action.type) {
      case SHOW_DAY_DROPDOWN:
        return {...state, ...action.showDayDropdown}
      default:
        return state
    }
  }

}

const rootReducer = combineReducers(reducers)

export default rootReducer
