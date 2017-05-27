import {createActions} from 'redux-actions'
import * as _ from 'lodash'


export function withLabels(actions) {
  let identityActions: string[] = []
  let validActions = Object.keys(actions).map(key => {
    const maybeLabels = actions[key]

    if (!(maybeLabels instanceof Array)) {
      return {
        [key]: maybeLabels
      }
    }

    if (0 < maybeLabels.length) {
      return {
        [key]: _.flow(Array.of, _.partial(_.zipObject, maybeLabels))
      }
    }

    identityActions.push(key)
    return {}
  })
  validActions = Object.assign({}, ...validActions)

  return createActions(validActions, ...identityActions)
}
