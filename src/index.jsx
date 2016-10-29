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
import { login, fetchTrips, fetchDays, fetchUser, fetchEvents } from './actions/index'
import App from './containers/App'
import Trip from './containers/Trip'
import User from './containers/User'
import Map from './components/Map'
import api from './middleware/api'


const loggerMiddleware = createLogger()


let store = createStore(rootReducer,
  applyMiddleware(
    thunkMiddleware,
    api,
    loggerMiddleware
  )
);

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="Trip/:trip_id" component={Trip}/>
        <Route path="User/:user_id" component={User}/>
        <Route path="Map/:trip_id" component={Map}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('react-root')
)
