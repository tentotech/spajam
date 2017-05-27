import * as React from 'react'
import {container} from '../utils'
import Header from './Header'


class Spot extends React.Component {
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
          <span>アニメの名前</span>
        </p>
        <p>
          <i className="ion-location"/>
          <span>住所やで</span>
        </p>
        <p>
          <i className="ion-chatbubble-working"/>
          <span>コメントコメントコメントコメントコメントコメントコメントコメント</span>
        </p>
      </div>
      <div className="friends">
        <p>ここを訪れたユーザー</p>
        <img src={`http://furyu.nazo.cc/twicon/pattern_match/normal`}/>
        <img src={`http://furyu.nazo.cc/twicon/pattern_match/normal`}/>
        <img src={`http://furyu.nazo.cc/twicon/pattern_match/normal`}/>
        <img src={`http://furyu.nazo.cc/twicon/pattern_match/normal`}/>
        <img src={`http://furyu.nazo.cc/twicon/pattern_match/normal`}/>
      </div>
      <div className="googleMap">
        <p>
          <i className="ion-location"/>
          <span>Google Map で見る</span>
        </p>
      </div>
    </main>
  }
}

export default container(spot)
