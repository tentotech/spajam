import * as _ from 'lodash'
import * as React from 'react'
import {container} from '../utils'
import Header from './Header'


class Spot extends React.Component {
  componentDidMount() {
    this.props.main.fetchSacredPlaces(this.props.params.id)
    if (this.props.location.query.mark_as_read) {
      this.props.main.markAsRead(this.props.params.id)
      setTimeout(() => alert('ここに来たことを記録しました'), 1000)
    }
  }

  handleClick() {
    const latitude = this.props.main.sacredPlace.sacred_place.latitude
    const longitude = this.props.main.sacredPlace.sacred_place.longitude
    location.href = `https://www.google.co.jp/maps/@${latitude},${longitude},15z`
  }

  render() {
    return <main className="spot">
      <div className="cover" style={{'backgroundImage': `url(${this.props.main.sacredPlace.sacred_place.image})`}}>
        <div className="filter">
          <h1 className="title">{this.props.main.sacredPlace.sacred_place.name}</h1>
        </div>
      </div>
      <div className="info">
        <p>
          <i className="ion-android-star"/>
          <span>{this.props.main.sacredPlace.anime.title}</span>
        </p>
        <p>
          <i className="ion-location"/>
      <span>{this.props.main.sacredPlace.sacred_place.address}</span>
        </p>
        <p>
          <i className="ion-chatbubble-working"/>
          <span>{this.props.main.sacredPlace.sacred_place.comment}</span>
        </p>
      </div>
      <div className="friends">
        <p>ここを訪れたユーザー</p>
      {_.values(_.groupBy(this.props.main.sacredPlace.users, user => user.screen_name)).map(userGroup => userGroup[0]).map(user => <img src={`http://furyu.nazo.cc/twicon/${user.screen_name}/normal`}/>)}
      </div>
      <div className="googleMap" onClick={this.handleClick.bind(this)}>
        <p>
          <i className="ion-location"/>
          <span>Google Map で見る</span>
        </p>
      </div>
    </main>
  }
}

export default container(Spot)
