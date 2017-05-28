import * as React from 'react'
import {Link} from 'react-router'
import {container} from '../utils'


const Activity = ({screen_name, sacred_place_name, timestamp, address, sacred_place_id}) =>
  <Link to={`/spot/${sacred_place_id}`} className="item">
    <div className="icon">
	    <img src={`http://furyu.nazo.cc/twicon/${screen_name}/original`} />
  	</div>
  	<div className="data">
	    <p>
      	<i className="ion-bonfire"/>
        <span>{screen_name}さんが訪れました</span>
    	</p>
      <h2>{sacred_place_name}</h2>
      <div className="min-data">
        <p className="addr">{address}</p>
        <p className="time">{timestamp}</p>
    	</div>
    </div>
  </Link>


class Timeline extends React.Component {
  componentDidMount() {
    this.props.main.fetchTimeline()
  }

  render() {
    return <main className='timeline'>
		  <div className="items">
      {this.props.main.activities.map((activity, index) => <Activity key={index} {...activity}/>)}
	  	</div>
    </main>
  }
}

export default container(Timeline)
