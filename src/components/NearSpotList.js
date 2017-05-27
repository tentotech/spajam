import React from 'react'
import {container} from '../utils'
import Header from './Header'

class NearSpotItem extends React.Component {
  render () {
    <a href={'/spot/' + this.props.locationId}>
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
    return this.props.main.nearSpots.map(nearSpot => <NearSpotItem {...nearSpot}/>)
  }
}

export default container(NearSpotList)
