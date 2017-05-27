import React from 'react'
import {Provider} from 'react-redux'
import {Router} from 'react-router'
import Top from './Top'
import Header from './Header'
import MyPage from './MyPage.js'
import spot from './spot.js'
import './style'


const Root = ({children}) =>
  <div>
    {children}
  </div>

const routes = [
  {
    path: '/',
    component: Root,
    indexRoute: {
      component: Top
    },
    childRoutes: [
      {
        path: '/mypage',
        component: MyPage
      },
      {
		path: '/spot/:id',
        component: spot
      }
    ]
  }
]

const App = ({store, history}) =>
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>

export default App
