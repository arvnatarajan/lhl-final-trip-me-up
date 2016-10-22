// Application entrypoint.

// Load up the application styles
import 'babel-polyfill'
require("../styles/application.scss");

// Render the top-level React component
import React from 'react'
import { render } from 'react-dom'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import App from './containers/App.jsx'
import rootReducer from './reducers/index'
import { login, fetchTrips } from './actions/index'
import { fetchUser } from './actions/user.js'


const loggerMiddleware = createLogger()

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware, loggerMiddleware))

render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('react-root')
)



setTimeout( () => {
  store.dispatch(login('foo'))
}, 2000)


// FETCHES USER DETAILS
store

  .dispatch(fetchUser(1))
  .then(() => console.log('state after fetchuser: ', store.getState()))

// FETCHES ALL TRIPS
// let user_id = 1
// store
//   .dispatch(fetchTrips(user_id, 'trips'))
//   .then(() => console.log('state after fetchtrips: ', store.getState()))






  .dispatch(fetchTrips('trips'))
  .then(() => console.log('state after fetchtrips: ', store.getState()))
  .catch(err => {console.log(err)})

