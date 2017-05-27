import * as _ from 'lodash'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actions from './actions'


function recursiveBind(map, dispatch) {
  const keys = Object.keys(map)
  const isOnDest = typeof map[keys[0]] === 'function'
  if (isOnDest) {
    return bindActionCreators(map, dispatch)
  }

  return keys.reduce(
    (acc, key) => Object.assign(acc, {[key]: recursiveBind(map[key], dispatch)}),
    {}
  )
}

export const container = connect(
  _.identity,
  recursiveBind.bind(null, actions),
  (state, props) => _.merge({}, state, props)
)
