import * as React from 'react'
import {container} from '../utils'
import {OAuth} from 'oauthio-web'


class Top extends React.Component {
  render() {
    return <main className='top'>
        <div className='filter'>
          <h1>Aniplace</h1>
		  <div className="btn">
          	<a onClick={this.signin.bind(this)}>Sign in with Twitter</a>
		  </div>
		</div>
      </main>
  }

  signin() {
    OAuth.initialize('HmEj0j3_xMF0oeS8WzuqFdHTfFQ')
    OAuth.popup('twitter').done(result => {
      result.me().done(result => {
        this.props.main.signin(result.alias)
      })
    }).fail(err => console.error(err))
  }
}

export default container(Top)
