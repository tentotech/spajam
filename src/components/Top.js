import * as React from 'react'
import {container} from '../utils'



class Top extends React.Component {
  render() {
    return <main className='top' onClick={this.handleClick.bind(this)}>
      {`Hello ${this.props.main.greetingsTo}`}
    </main>
  }

  handleClick() {
    debugger
    this.props.main.changeTheWorld(123)
  }
}

export default container(Top)
