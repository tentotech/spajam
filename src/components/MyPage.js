import * as React from 'react'
import {container} from '../utils'
import Header from './Header'
import Cookies from 'js-cookie'


const HistoryItem => ({timestamp, sacred_place_name, anime_name}) => {
  return <a>
    <div className="icon">
      <i className="ion-flag"/>
    </div>
    <div className="data">
      <h2>{sacred_place_name}</h2>
      <p>{anime_name}</p>
      <p>{timestamp}</p>
    </div>
  </a>
}


class MyPage extends React.Component {
  componentDidMount() {
    this.props.main.fetchHistory()
  }

  render() {
    return <main className="mypage">
      <Header title='My page'/>
      <div className="user-info">
        <img src={`http://furyu.nazo.cc/twicon/${Cookies.get('screen_name')}/original`} />
        <p className="sn">@{Cookies.get('screen_name')}</p>
        <p className="flag">
          <i className="ion-flag"/>
          <span>今まで0個の聖地を訪れました</span>
        </p>
      </div>
      <div className="history">
        {this.props.main.histories.map(history => <HistoryItem sacred_place_name={history.sacred_place} timestamp={history.timestamp} anime_name={history.anime.name} />)}
		  </div>
    </main>
  }
}

export default container(MyPage)
