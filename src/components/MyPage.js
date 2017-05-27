import * as React from 'react'
import {Link} from 'react-router'
import {container} from '../utils'
import Header from './Header'
import Cookies from 'js-cookie'


const HistoryItem = ({sacred_place_id, timestamp, sacred_place_name, anime_name}) => {
  return <Link to={`/spot/${sacred_place_id}`}>
    <div className="icon">
      <i className="ion-flag"/>
    </div>
    <div className="data">
      <h2>{sacred_place_name}</h2>
      <p>{anime_name}</p>
      <p>{timestamp}</p>
    </div>
  </Link>
}


class MyPage extends React.Component {
  componentDidMount() {
    this.props.main.fetchHistories()
  }

  render() {
    return <main className="mypage">
      <Header title='My page'/>
      <div className="user-info">
        <img src={`http://furyu.nazo.cc/twicon/${Cookies.get('screen_name')}/original`} />
        <p className="sn">@{Cookies.get('screen_name')}</p>
        <p className="flag">
          <i className="ion-flag"/>
          <span>今まで{this.props.main.histories.length}個の聖地を訪れました</span>
        </p>t
      </div>
      <div className="history">
      {this.props.main.histories.map((history, index) => <HistoryItem sacred_place_id={history.sacred_place_id} sacred_place_name={history.name} timestamp={history.timestamp} anime_name={history.title} key={index} />)}
      </div>
    </main>
  }
}

export default container(MyPage)
