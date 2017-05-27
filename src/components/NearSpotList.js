import React from 'react'
import {container} from '../utils'
import Header from './Header'

class NearSpotItem extends React.Component {
  render () {
    return <a href={'/spot/' + this.props.locationId}>
      <label>{this.props.name}</label>
      <label>{this.props.title}</label>
      <label>{this.props.address}</label>
    </a>
  }
}

const ConnectedNearSpotItem = container(NearSpotItem)


class NearSpotList extends React.Component {
  componentDidMount() {
    this.props.main.fetchNearSpot()
  }

  render() {
    return (
      <div>
        {this.props.main.nearSpots.map(nearSpot => <NearSpotItem {...nearSpot}/>)}
      </div>
    )
  }
}

export default container(NearSpotList)
