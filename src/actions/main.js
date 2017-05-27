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

var payloadActions = withLabels({})

function signin(screen_name) {
  return dispatch => {
    fetchMySQL(`INSERT IGNORE INTO user(screen_name) VALUES ("${screen_name}")`).then(response =>
      fetchMySQL(`SELECT * FROM user WHERE screen_name = "${screen_name}"`)
    ).then(users => {
      Cookies.set('id', users[0].id)
      Cookies.set('screen_name', screen_name)
      dispatch({
        type: 'SIGNIN',
        payload: {
          id: users[0].id,
          screen_name
        }
      })
    })
  }
}

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
    fetchMySQL(`SELECT * FROM favorite_anime WHERE user_id = ${getState().main.currentUser.id}`)
      .then(favoriteAnimes => dispatch({
        type: 'FETCH_FAVORITE_ANIMES',
        payload: {favoriteAnimes}
      }))
  }
}
fetchFavoriteAnimes.toString = () => 'FETCH_FAVORITE_ANIMES'

function setAnimeLike(anime_id, isFavorite) {
  return (dispatch, getState) => {
    if (isFavorite) {
      fetchMySQL(`INSERT IGNORE INTO favorite_anime(user_id, anime_id) VALUES (${getState().main.currentUser.id}, ${anime_id})`)
        .then(() => dispatch(fetchFavoriteAnimes()))
    } else {
      fetchMySQL(`DELETE FROM favorite_anime WHERE user_id = ${getState().main.currentUser.id} AND anime_id = ${anime_id}`)
        .then(() => dispatch(fetchFavoriteAnimes()))
    }
  }
}
setAnimeLike.toString = () => 'SET_ANIME_LIKE'

function fetchSacredPlaces(sacred_place_id) {
  console.log('hahaha')
  return dispatch => {
    console.log('hohoho')
    fetchMySQL(`SELECT * FROM sacred_place JOIN anime ON sacred_place.anime_id = anime.id WHERE sacred_place.id = ${sacred_place_id}`).then(response => {
      dispatch({
        type: 'FETCH_SACRED_PLACES',
        payload: response[0]
      })
    })
  }
}
fetchSacredPlaces.toString = () => 'FETCH_SACRED_PLACES'


export const actions = Object.assign({}, payloadActions, {fetchAnimes, fetchFavoriteAnimes, setAnimeLike, signin, fetchSacredPlaces})
