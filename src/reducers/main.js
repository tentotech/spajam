import {handleActions} from 'redux-actions'
import actions from '../actions'



export const reducer = handleActions({
  [actions.main.changeTheWorld]: (state, _) => ({
    greetingsTo: state.greetingsTo === 'SPAJAM' ? 'World' : 'SPAJAM'
  })
}, {
  greetingsTo: 'World'
})
