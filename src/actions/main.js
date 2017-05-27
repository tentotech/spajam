import Cookies from 'js-cookie'
import {withLabels} from './utils'


function fetchMySQL(query) {
  return fetch('http://302a08e6.ngrok.io/sql', {method: 'POST', mod: 'cors', body: query})
    .then(res => res.json())
    .then(json => json.response)
}

export const actions = withLabels({
  SIGNIN: screen_name => {
    Cookies.set('screen_name', screen_name)
    return {screen_name}
  },
  FETCH_ANIMES: () => {
    return dispatch => {
      const query = JSON.stringify({sql: 'SELECT * FROM anime;'})
      fetchMySQL(query).then(animes => dispatch({animes}))
    }
  },
  FETCH_FAVORITE_ANIMES: () => {
    return (dispatch, getState) => {
      const {currentUser} = getState()
      const query = JSON.stringify({
        sql: `SELECT favorite_anime.* FROM favorite_anime, user WHERE user.screen_name = ${currentUser}`
      })
      fetchMySQL(query).then(favoriteAnimes => dispatch({favoriteAnimes}))
    }
  }
})
