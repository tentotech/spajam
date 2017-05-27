import Cookies from 'js-cookie'
import {handleActions} from 'redux-actions'
import actions from '../actions'


export const reducer = handleActions({
  [actions.main.signin]: (state, {payload}) =>
    Object.assign({}, state, {
      currentUser: payload
    }),
  [actions.main.fetchAnimes]: (state, {payload}) =>
    Object.assign({}, state, {
      animes: payload.animes
    }),
  [actions.main.fetchFavoriteAnimes]: (state, {payload}) => {

    return Object.assign({}, state, {
      favoriteAnimes: payload.favoriteAnimes
    })
  },
  [actions.main.fetchSacredPlaces]: (state, {payload}) => {
    return Object.assign({}, state, {
      sacredPlace: payload
    })
  },
  [actions.main.fetchTimeLine]:(state, {payload}) => {
    return Object.assign({}, state, {
      timeline: payload
    })
  },
  [actions.main.fetchNearSpot]: (state, {payload}) => {
    return Object.assign({}, state, {
      nearSpots: payload.nearSpots

    })
  },
  [actions.main.fetchHistories]: (state, {payload}) => {

    return Object.assign({}, state, {
      histories: payload
    })
  }
}, {
  currentUser: {id: Cookies.get('id'), screen_name: Cookies.get('screen_name')},
  animes: [],
  favoriteAnimes: [],
  sacredPlace: {
    anime: {}, users: [], sacred_place: {}
  },
  nearSpots: [],
  histories: []
})
