import {SET_MODE_MAIN_WIN,
	SET_MODE_SLIDER_WIN,
	SLIDE_BACK,
	SLIDE_NEXT} from './actions'

import img1 from './img/person1.png';
import img2 from './img/person2.png';
import img3 from './img/person3.png';
import img4 from './img/person4.png';
export const arrayOfImg = [img1, img2, img3, img4];

const initialState = {
	win: 'MainWin',
	indexImg: 0,
	slides: arrayOfImg,
}

const rootReducer = (state = initialState, action) => {
	switch(action.type){
		case SET_MODE_MAIN_WIN:
			return { ...state, win: action.win};
		case SET_MODE_SLIDER_WIN:
			return { ...state, win: action.win};
		case SLIDE_BACK:
			return { ...state, indexImg: action.payload}
		case SLIDE_NEXT:
			return { ...state, indexImg: action.payload}
		default: return state;
	}
}

export default rootReducer;
