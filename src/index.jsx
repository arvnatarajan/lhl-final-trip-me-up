// Application entrypoint.

// Load up the application styles
import 'babel-polyfill'
require("../styles/application.scss");

// Render the top-level React component
import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { render } from 'react-dom'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/index'
import { login, fetchTrips } from './actions/index'
import { fetchUser } from './actions/user.js'
import App from './containers/App'
import Trip from './containers/Trip'
import User from './containers/User'


const loggerMiddleware = createLogger()

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware, loggerMiddleware))

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="/Trip/:trip_id" component={Trip}/>
        <Route path="/User/:user_id" component={User}/>
      </Route>
    </Router>
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

// FETCHES ALL TRIPS FOR USER_ID
let user_id = 1
store
  .dispatch(fetchTrips(user_id, 'trips'))
  .then(() => console.log('state after fetchtrips: ', store.getState()))
