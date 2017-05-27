import Cookies from 'js-cookie'
import {withLabels} from './utils'


function fetchMySQL(query) {
  console.log('query invoked: ', query)
  const body = new URLSearchParams()
  body.append('sql', query)
  return fetch('http://302a08e6.ngrok.io/sql', {method: 'POST', mode: 'cors', body})
    .then(res => res.json())
    .then(json => json.response)
}

var payloadActions = withLabels({
  SIGNIN: screen_name => {
    Cookies.set('screen_name', screen_name)
    return {screen_name}
  }
})

function fetchAnimes() {
  console.log('fetchAnimes')
  return dispatch => {
    fetchMySQL('SELECT * FROM anime;').then(animes => dispatch({
      type: 'FETCH_ANIMES',
      payload: {animes}
    }))
  }
}
fetchAnimes.toString = () => 'FETCH_ANIMES'

function fetchFavoriteAnimes() {
  return (dispatch, getState) => {
    const {currentUser} = getState().main
    if(currentUser === undefined) {
      alert('currentUser is undefined')
    }
    fetchMySQL(`SELECT favorite_anime.* FROM favorite_anime, user WHERE user.screen_name = ${currentUser}`)
      .then(favoriteAnimes => dispatch({
        type: 'FETCH_FAVORITE_ANIMES',
        payload: {favoriteAnimes}
      }))
  }
}
fetchFavoriteAnimes.toString = () => 'FETCH_FAVORITE_ANIMES'

function setAnimeLike(anime_id, isFavorite) {
  return (dispatch, getState) => {
    const {currentUser} = getState().main
    if (isFavorite) {
      fetchMySQL(`INSERT INTO favorite_anime(user_id, anime_id) VALUES (${currentUser}, ${anime_id})`)
        .then(() => dispatch(fetchFavoriteAnimes()))
    } else {
      fetchMySQL(`DELETE FROM favorite_anime WHERE user_id = ${currentUser} AND anime_id = ${anime_id}`)
        .then(() => dispatch(fetchFavoriteAnimes()))
    }
  }
}
setAnimeLike.toString = () => 'SET_ANIME_LIKE'


export const actions = Object.assign({}, payloadActions, {fetchAnimes, fetchFavoriteAnimes, setAnimeLike})
