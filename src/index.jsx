// Application entrypoint.

// Load up the application styles
import 'babel-polyfill'
require("../styles/application.scss");

// Render the top-level React component
import React from 'react'
import thunkMiddleware from 'redux-thunk'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import App from './containers/App.jsx'
import rootReducer from './reducers/index'
import { login, selectUser } from './actions/index'

let store = createStore(
              rootReducer,
              applyMiddleware(thunkMiddleware)
            )

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-root')
)

store.dispatch(selectUser(2))

setTimeout( () => {
  store.dispatch(login('foo'))
}, 2000)
