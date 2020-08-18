import React from 'react'
import { Link } from 'react-router-dom'
import {setMainWin} from '../store/actions'
import {Slider} from './Slider'


import {store} from '../store/store'

class SliderWin extends React.Component{
	render(){
		return(
			<div>
			<Slider/>
			<Link to='/' onClick={() => {(store.dispatch(setMainWin()))}}>back</Link>
			<button>change mode</button>
			</div>
		);
	}
}

export default SliderWin;
