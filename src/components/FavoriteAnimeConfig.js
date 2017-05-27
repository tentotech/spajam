import React from 'react'
import {container} from '../utils'


class AnimeItem extends React.Component {
  render() {
    return <label>
      {this.props.title}
      <input type="checkbox" checked={this.isFavorite()} onClick={event => this.handleClick(event)} />
    </label>
  }

  handleClick(event) {
    this.props.main.setAnimeLike(this.props.id, event.target.checked)
  }

  isFavorite() {
    this.props.main.favoriteAnimes.some(favoriteAnime => favoriteAnime.anime_id == this.props.id)
  }
}

const ConnectedAnimeItem = container(AnimeItem)


export class FavoriteAnimeConfig extends React.Component {
  componentDidMount() {
    this.props.main.fetchAnimes()
  }

  render() {
    return <main className='preferred-anime-config'>
      {this.props.main.animes.map(({id, title}) =>
        <ConnectedAnimeItem id={id} title={title} key={id} />
      )}
    </main>
  }
}

export default container(FavoriteAnimeConfig)
