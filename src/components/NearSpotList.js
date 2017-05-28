import React from 'react'
import {container} from '../utils'
import Header from './Header'

class NearSpotItem extends React.Component {
  render () {
    return <a href={'/spot/' + this.props.id + '?mark_as_read=true'} className="near-spot">
      <div className="icon">
                      <i className="ion-navigate"/>
           </div>
              <div className="data">
           <h2>{this.props.name}</h2>
                    <div className="min-data">
                    <p>
                                    <i className="ion-android-star"/>
                                    <span>{this.props.title}</span>
                            </p>
                    <p>
                                    <i className="ion-location"/>
                                    <span>{this.props.address}</span>
                            </p>
                    </div>
                    </div>
 </a>
  }
}

const ConnectedNearSpotItem = container(NearSpotItem)


class NearSpotList extends React.Component {
  componentDidMount() {
    this.props.main.fetchNearSpot()
	  console.log(this.props.main)
  }

  render() {
    return <div className="near-spots">
      <Header title="near spots"/>
      {this.props.main.nearSpots.map(nearSpot => <NearSpotItem {...nearSpot} key={nearSpot.id}/>)}
    </div>
  }
}

export default container(NearSpotList)
