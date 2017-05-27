import React from 'react'
import {container} from '../utils'

class Header extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			isOpen: false
		}
	}

 	render() {
	return <div className="wrap">
		<div className="header" >
			<p>{this.props.title}</p>
			<i className="ion-navicon menu-icon" onClick={ () => this.toggle() }/>
		</div>
		<div className={this.state.isOpen ? 'menu active' : 'menu'}>
			<a href="/near-spot-list">
				<i className="ion-navigate"/>
				<span>近くの聖地を探す</span>
			</a>
			<a href="/timeline">
				<i className="ion-bonfire"/>
				<span>タイムライン</span>
			</a>
			<a href="/mypage">
				<i className="ion-person"/>
				<span>マイページ</span>
			</a>
			<a href="/favorite-anime-config">
				<i className="ion-gear-a"/>
				<span>設定</span>
			</a>
		</div>
	</div>
  	}

	toggle(){
		console.log('toggle')
		this.setState({isOpen: !this.state.isOpen})
	}

}

export default container(Header)
