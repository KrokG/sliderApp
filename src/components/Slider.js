import React from 'react';
import {store} from '../store/store'
import {slideBack,slideNext} from '../store/actions'

export const Slider = () =>{
	const index = store.getState().indexImg;
	const src =store.getState().slides[index];
	const Img = () => (<img src={src} alt=''/>);
	return (
	<div>
		<button onClick={() => {(store.dispatch(slideBack()))}}>back</button>
		<div>
			<Img/>
		</div>
		<button onClick={() => {(store.dispatch(slideNext()))}}>next</button>
	</div>
)}
