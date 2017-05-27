import React from 'react'
import {render} from 'react-dom'
import {browserHistory} from 'react-router'
import thunk from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux'
import {syncHistoryWithStore, routerMiddleware} from 'react-router-redux'
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly'
import App from './components'
import {reducer} from './reducers'


const middleware = composeWithDevTools(applyMiddleware(thunk, routerMiddleware(browserHistory)))
const store = createStore(reducer, middleware)
const history = syncHistoryWithStore(browserHistory, store)

render(
  <App store={store} history={history} />,
  document.getElementsByTagName('div')[0]
)
