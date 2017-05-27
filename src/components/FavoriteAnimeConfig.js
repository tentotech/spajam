import React from 'react'
import {container} from '../utils'
import Header from './Header'

class AnimeItem extends React.Component {
  render() {
    return <label className={this.isFavorite() ? 'active-label' : 'not-active-label'}>
      {this.props.title}
      <input type="checkbox" checked={this.isFavorite()} onChange={event => this.handleClick(event)} style={{display: 'none'}} />
    </label>
  }

  handleClick(event) {
    this.props.main.setAnimeLike(this.props.id, event.target.checked)
  }

  isFavorite() {
    return this.props.main.favoriteAnimes.some(favoriteAnime => favoriteAnime.anime_id == this.props.id)
  }
}

const ConnectedAnimeItem = container(AnimeItem)


export class FavoriteAnimeConfig extends React.Component {
  componentDidMount() {
    this.props.main.fetchAnimes()
    this.props.main.fetchFavoriteAnimes()
  }

  render() {
    return <main className='preferred-anime-config'>
		<Header/>
      {this.props.main.animes.map(({id, title}) =>
        <ConnectedAnimeItem id={id} title={title} key={id} />
      )}
    </main>
  }
}

export default container(FavoriteAnimeConfig)
