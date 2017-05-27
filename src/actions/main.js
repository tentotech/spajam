import {withLabels} from './utils'


export const actions = withLabels({
  SIGNIN: screen_name => {
    document.cookie = `screen_name=${screen_name}`
    return {screen_name}
  }
})
