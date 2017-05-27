import Cookies from 'js-cookie'
import {withLabels} from './utils'


export const actions = withLabels({
  SIGNIN: screen_name => {
    Cookies.set('screen_name', screen_name)
    return {screen_name}
  }
})
