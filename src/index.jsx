// Application entrypoint.

// Load up the application styles
require("../styles/application.scss");

// Render the top-level React component
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './containers/App.jsx'
import rootReducer from './reducers/index'
import { login, specifyUserID } from './actions/index'

let store = createStore(rootReducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-root')
)

store.dispatch(specifyUserID('2'))

setTimeout( () => {
  store.dispatch(login('foo'))
}, 2000)
