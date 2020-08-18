import {store} from './store'

export const SET_MODE_MAIN_WIN = 'SET_MODE_MAIN_WIN';
export const SET_MODE_SLIDER_WIN = 'SET_MODE_SLIDER_WIN';
export const SLIDE_BACK = 'SLIDE_BACK'
export const SLIDE_NEXT = 'SLIDE_NEXT'

export const setMainWin = () => {
	console.log('setMainWin');
	return {
		type: SET_MODE_MAIN_WIN,
		win: 'MainWin',
	};
}

export const setSliderWin = () => {
	console.log('setSliderWin');
	return {
		type: SET_MODE_SLIDER_WIN,
		win: 'SliderWin',
	};
}

export const slideBack = () => {
	console.log('SlideBack');
	let sizeArrayOfImg = store.getState().slides.length
	let index = store.getState().indexImg
	index--;
	index = index < 0 ? sizeArrayOfImg -1: index;
	return {
		type: SLIDE_BACK,
		payload: index,
	}
}

export const slideNext = () => {
	console.log('SlideNext');
	let sizeArrayOfImg = store.getState().slides.length
	let index = store.getState().indexImg
	index++;
	index = index > sizeArrayOfImg-1 ? 0: index;
	return {
		type: SLIDE_NEXT,
		payload: index,
	}
}
