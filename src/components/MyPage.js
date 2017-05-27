import * as React from 'react'
import {container} from '../utils'
import Header from './Header'
import Cookies from 'js-cookie'

class MyPage extends React.Component {

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
			<a>
		  		<div className="icon">
		  			<i className="ion-flag"/>
				</div>
		  		<div className="data">
		  			<h2>聖地の名前聖地の名前聖地の名前</h2>
		  			<p>アニメの名前</p>
		  			<p>1999/4/10</p>
				</div>
			</a>
			<a>
		  		<div className="icon">
		  			<i className="ion-flag"/>
				</div>
		  		<div className="data">
		  			<h2>聖地の名前聖地の名前聖地の名前</h2>
		  			<p>アニメの名前</p>
		  			<p>1999/4/10</p>
				</div>
			</a>
			<a>
		  		<div className="icon">
		  			<i className="ion-flag"/>
				</div>
		  		<div className="data">
		  			<h2>聖地の名前聖地の名前聖地の名前</h2>
		  			<p>アニメの名前</p>
		  			<p>1999/4/10</p>
				</div>
			</a>
		</div>
      </main>
  }

	componentDidMount(){
	}

}

export default container(MyPage)
