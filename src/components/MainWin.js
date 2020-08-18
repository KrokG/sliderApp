import React from 'react'
import { Link } from 'react-router-dom'
import {store} from '../store/store'
import {setSliderWin} from '../store/actions'

const MainWin = (dispatch) => {
	return(
	<div>
		<h1>Welcome to page</h1>
		<Link to='/slider'
		 onClick={
			() => {(store.dispatch(setSliderWin()))}
		}>Slider</Link>
	</div>
)};

export default MainWin;
