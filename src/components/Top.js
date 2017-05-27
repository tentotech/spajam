import * as React from 'react'
import {container} from '../utils'
import {OAuth} from 'oauthio-web'


class Top extends React.Component {
  render() {
    return <main className='top'>
      <a onClick={this.signin.bind(this)}>Sign in with Twitter</a>
    </main>
  }

  signin() {
    OAuth.initialize('HmEj0j3_xMF0oeS8WzuqFdHTfFQ')
    OAuth.popup('twitter').done(result => {
      result.me().done(result => {
        debugger
        this.props.main.signin(result.alias)
      })
    }).fail(err => console.error(err))
  }
}

export default container(Top)
