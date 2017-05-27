import Cookies from 'js-cookie'
import {handleActions} from 'redux-actions'
import actions from '../actions'



export const reducer = handleActions({
  [actions.main.signin]: (state, {payload}) =>
    Object.assign({}, state, {
      currentUser: payload.user
    }),
  [actions.main.fetchAnimes]: (state, {payload}) =>
    Object.assign({}, state, {
      animes: payload.animes
    }),
  [actions.main.fetchFavoriteAnimes]: (state, {payload}) => {

    return Object.assign({}, state, {
      favoriteAnimes: payload.favoriteAnimes
    })
  }
}, {
  currentUser: {id: Cookies.get('id'), Cookies.get('screen_name')},
  animes: [],
  favoriteAnimes: []
})
