import Cookies from 'js-cookie'
import {push} from 'react-router-redux'
import {withLabels} from './utils'
import {fetchMySQL} from '../utils'


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
      }),
      dispatch(push('/timeline'))
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
    fetchMySQL(`SELECT * FROM sacred_place WHERE id = ${sacred_place_id}`).then(sacred_places => {
      const sacred_place = sacred_places[0]
      fetchMySQL(`SELECT * FROM anime WHERE id = ${sacred_place.anime_id}`).then(animes => {
        const anime = animes[0]
        fetchMySQL(`SELECT user.* FROM history JOIN sacred_place ON history.sacred_place_id = sacred_place.id JOIN user ON history.user_id = user.id WHERE sacred_place.id = ${sacred_place_id}`).then(users => {
          dispatch({
            type: 'FETCH_SACRED_PLACES',
            payload: {
              sacred_place, anime, users
            }
          })
        })
      })
    })
  }
}
fetchSacredPlaces.toString = () => 'FETCH_SACRED_PLACES'

function markAsRead(sacred_place_id) {
  return (dispatch, getState) => {
    fetchMySQL(`INSERT IGNORE INTO history(user_id, sacred_place_id, timestamp) VALUES (${getState().main.currentUser.id}, ${sacred_place_id}, NOW())`)
  }
}
markAsRead.toString = () => 'MARK_AS_READ'

function fetchNearSpot() {
  console.log('fetchNearSpot')
  return dispatch => {
    navigator.geolocation.getCurrentPosition(function(position) {
      const currentPosition = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }

      console.log(currentPosition)

      fetchMySQL(`SELECT * FROM sacred_place JOIN anime ON sacred_place.anime_id = anime.id WHERE sacred_place.latitude > ${currentPosition.latitude - 10} AND sacred_place.latitude < ${currentPosition.latitude + 10} AND sacred_place.longitude > ${currentPosition.longitude - 10} AND sacred_place.longitude < ${currentPosition.longitude + 10}`)
        .then(nearSpots => dispatch({
          type: 'FETCH_NEAR_SPOTS',
          payload: {nearSpots}
        }))
    })
  }
}
fetchNearSpot.toString = () => 'FETCH_NEAR_SPOT'

export const actions = Object.assign({}, payloadActions, {fetchAnimes, fetchFavoriteAnimes, setAnimeLike, signin, fetchSacredPlaces, markAsRead, fetchNearSpot})
