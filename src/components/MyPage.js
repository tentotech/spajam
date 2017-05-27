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
		</div>
      </main>
  }

	componentDidMount(){
	}

}

export default container(MyPage)
