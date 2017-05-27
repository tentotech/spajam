import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import * as main from './main'


export const reducer = combineReducers({
  main: main.reducer,
  routing: routerReducer
})
