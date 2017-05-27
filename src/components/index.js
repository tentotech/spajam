import React from 'react'
import {Provider} from 'react-redux'
import {Router} from 'react-router'
import Top from './Top'
import Header from './Header'
import MyPage from './MyPage.js'
import FavoriteAnimeConfig from './FavoriteAnimeConfig.js'
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
      }, {
        path: 'favorite-anime-config',
        component: FavoriteAnimeConfig
      }
    ]
  }
]

const App = ({store, history}) =>
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>

export default App
