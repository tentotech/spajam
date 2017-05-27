import React from 'react'
import {Provider} from 'react-redux'
import {Router} from 'react-router'
import Top from './Top'
import Header from './Header'
import './style'


const Root = ({children}) =>
  <div>
    <Header/>
    {children}
  </div>

const routes = [
  {
    path: '/',
    component: Root,
    indexRoute: {
      component: Top
    },
    childRoutes: []
  }
]

const App = ({store, history}) =>
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>

export default App
