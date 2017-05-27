import * as React from 'react'
import {container} from '../utils'
import Header from './Header'

class TimeLine extends React.Component {
  componentDidMount() {
    this.props.main.fetchTimeLine()
    console.log(this.props.main)
  }

  render() {
    return <main className='timeline'>
		<Header/>
		<div className="items">
		  <a className="item">
		  	<div className="icon">
		  		<img src={`http://furyu.nazo.cc/twicon/pattern_match/original`} />
		  	</div>
		  	<div className="data">
		  		<p>
		  			<i className="ion-bonfire"/>
		  			<span>誰々さんが訪れました</span>
		  		</p>
		  		<h2>聖地の名前やで</h2>
		  		<div className="min-data">
		  			<p className="addr">ふじみ野し築地2-1-36</p>
		  			<p className="time">1999/4/10</p>
		  		</div>
		  	</div>
		  </a>
		  <a className="item">
		  	<div className="icon">
		  		<img src={`http://furyu.nazo.cc/twicon/pattern_match/original`} />
		  	</div>
		  	<div className="data">
		  		<p>
		  			<i className="ion-bonfire"/>
		  			<span>誰々さんが訪れました</span>
		  		</p>
		  		<h2>聖地の名前やで</h2>
		  		<div className="min-data">
		  			<p className="addr">ふじみ野し築地2-1-36</p>
		  			<p className="time">1999/4/10</p>
		  		</div>
		  	</div>
		  </a>
		</div>
     </main>
  }
}

export default container(TimeLine)
