import {handleActions} from 'redux-actions'
import actions from '../actions'



export const reducer = handleActions({
  [actions.main.signin]: (state, {payload}) =>
    Object.assign({}, state, {
      currentUser: payload.screen_name
    })
}, {
  currentUser: null
})
