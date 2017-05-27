import * as _ from 'lodash'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actions from './actions'


function fetchMySQL(query) {
  console.log('query invoked: ', query)
  const body = new URLSearchParams()
  body.append('sql', query)
  return fetch('http://302a08e6.ngrok.io/sql', {method: 'POST', mode: 'cors', body})
    .then(res => res.json())
    .then(json => json.response)
}

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
  (state, actions, props) => _.merge({}, state, actions, props)
)
