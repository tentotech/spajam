import Cookies from 'js-cookie'
import {handleActions} from 'redux-actions'
import actions from '../actions'



export const reducer = handleActions({
  [actions.main.signin]: (state, {payload}) => {
    return Object.assign({}, state, {
      currentUser: payload.screen_name
    })
  }
}, {
  currentUser: Cookies.get('screen_name')
})
