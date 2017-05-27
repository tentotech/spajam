import * as React from 'react'
import {container} from '../utils'
import Header from './Header'


class Spot extends React.Component {
  componentDidMount() {
    this.props.main.fetchSacredPlaces(this.props.params.id)
    if (this.props.location.query.mark_as_read) {
      this.props.main.markAsRead(this.props.params.id)
    }
  }

  handleClick() {
    const latitude = this.props.main.sacredPlace.sacred_place.latitude
    const longitude = this.props.main.sacredPlace.sacred_place.longitude
    location.href = `https://www.google.co.jp/maps/@${latitude},${longitude},15z`
  }

  render() {
    return <main className="spot">
      <div className="cover" style={{'backgroundImage': `url("http://blog-imgs-92.fc2.com/b/l/o/blogman55/livejupiter_1461993406_12701.jpg")`}}>
        <div className="filter">
          <h1 className="title">おおスポット名やでスポット名やで</h1>
        </div>
      </div>
      <div className="info">
        <p>
          <i className="ion-android-star"/>
          <span>${this.props.main.sacredPlace.anime.title}</span>
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
        {this.props.main.sacredPlace.users.map(user => <img src={`http://furyu.nazo.cc/twicon/${user.screen_name}/normal`}/>)}
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
