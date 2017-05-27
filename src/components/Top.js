import * as React from 'react'
import {container} from '../utils'



class Top extends React.Component {
  render() {
    return <main className='top' onClick={this.handleClick.bind(this)}>
      {`Hello ${this.props.state.greetingsTo}`}
    </main>
  }

  handleClick() {
    this.props.actions.changeTheWorld(123)
  }
}

export default container(Top)
