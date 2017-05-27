import * as React from 'react'
import {container} from '../utils'
import OAuth from 'oauth'


class Top extends React.Component {
  render() {
    return <main className='top'>
      <a onClick={this.signin.bind(this)}>Sign in with Twitter</a>
    </main>
  }

  signin() {
    OAuth.poup('twitter')
      .done(result => {
        this.props.main.signin(result.me().name)
      }).fail(err => console.error(err))
  }
}

export default container(Top)
