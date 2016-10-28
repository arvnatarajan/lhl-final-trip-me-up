import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import {  RECEIVE_TRIPS,
          REQUEST_TRIPS,
          FAILURE_TRIPS,
          CLEAR_TRIPS,
          RECEIVE_DAYS,
          REQUEST_DAYS,
          RECEIVE_EVENTS,
          REQUEST_EVENTS,
          REQUEST_USER,
          RECEIVE_USER,
          DELETED_EVENT,
          WILL_DELETE_EVENT,
          LOGIN_REQUEST,
          LOGIN_SUCCESS,
          LOGIN_FAILURE,
          LOGOUT_REQUEST,
          LOGOUT_SUCCESS,
          REQUEST_FRIEND_INVITE,
          REQUEST_FRIEND_INVITE_SUCCESS,
          SHOW_MODAL,
          SHOW_DAY_DROPDOWN
        } from '../actions/index'

const initialState = {
  tripEvents: []
}


const reducers = {

  form: formReducer,     // <---- Mounted at 'form'

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

  userTrips: (state = {
    isFetching: false,
    trips: []
  }, action) => {
    switch (action.type) {
      case REQUEST_TRIPS:
        return {isFetching: true}
      case RECEIVE_TRIPS:
        return {
          isFetching: false,
          trips: action.trips
        }
      case FAILURE_TRIPS:
        return {isFetching: false}
      case CLEAR_TRIPS:
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
      case DELETED_EVENT:
        if (action.deletedEventID) {
          let remainingEvents = state.filter( (event) => {
            return event.id != action.deletedEventID
          })
          return remainingEvents
        } else {
          return state
        }
      case 'ADD_EVENT':
        return [...state, action.newEvent]
      default:
        return state
    }
  },

  deletingEventId: (state = null, action) => {
    switch (action.type) {
      case WILL_DELETE_EVENT:
        return {status: action.status}
      default:
        return state
    }
  },


  modalID: (state = null, action) => {
    switch (action.type) {
      case SHOW_MODAL:
        return action.modalID
      default:
        return state
    }
  },

  showEventsForDay: (state = null, action) => {
    switch (action.type) {
      case SHOW_DAY_DROPDOWN:
        return action.showEventsForDay
      default:
        return state
    }
  },

  auth: (state = {
    isFetching: false,
    isAuthenticated: (localStorage.getItem('user_id') ? true : false)
  }, action) => {
    switch (action.type) {
      case LOGIN_REQUEST:
        return {
          isFetching: true,
          isAuthenticated: false,
          user: action.creds
        }
      case LOGIN_SUCCESS:
        return {
          isFetching: false,
          isAuthenticated: true,
          errorMessage: '',
          user_id: action.user_id
        }
      case LOGIN_FAILURE:
        return {
          isFetching: false,
          isAuthenticated: false,
          errorMessage: action.message
        }
      case LOGOUT_SUCCESS:
        return {
          isFetching: true,
          isAuthenticated: false
        }
      default:
        return state
    }
  },

  notification: (state = {
    isFetching: false,
    isSending: false
  }, action) => {
    switch (action.type) {
      case REQUEST_FRIEND_INVITE:
        return {
          isSending: true,
          friendID: action.friendID
        }
      case REQUEST_FRIEND_INVITE_SUCCESS:
        return {
          isSending: false,
          notification_message: 'Your friend wants you to join their trip!',
          notification_type: 'Invitation',
          friendID: action.friendID
        }
      default:
        return state
    }
  }

}

const rootReducer = combineReducers(reducers)

export default rootReducer
