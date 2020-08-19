import {SET_MODE_MAIN_WIN,
		SET_MODE_SLIDER_WIN,
		CHANGE_MODE,
		SLIDE_BACK,
		SLIDE_NEXT
	} from './actionTypes';

export const setMainWin = () => {
	return {
		type: SET_MODE_MAIN_WIN,
		win: 'MainWin',
	};
}

export const setSliderWin = () => {
	return {
		type: SET_MODE_SLIDER_WIN,
		win: 'SliderWin',
	};
}

export const slideBack = (index) => {
	return {
		type: SLIDE_BACK,
		payload: index,
	}
}

export const slideNext = (index) => {
	return {
		type: SLIDE_NEXT,
		payload: index,
	}
}

export const changeMode = (mode, surce) =>{
	return {
		type: CHANGE_MODE,
		payload: mode,
		surce: surce,
		indexImg: 0,
	}
}
