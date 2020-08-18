import {initialState} from './initialState'

import {
	SET_MODE_MAIN_WIN,
	SET_MODE_SLIDER_WIN,
	SLIDE_BACK,
	SLIDE_NEXT,
	CHANGE_MODE
} from './actions'

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_MODE_MAIN_WIN:
			return { ...state, win: action.win };
		case SET_MODE_SLIDER_WIN:
			return { ...state, win: action.win };
		case SLIDE_BACK:
			return { ...state, indexImg: action.payload }
		case SLIDE_NEXT:
			return { ...state, indexImg: action.payload }
		case CHANGE_MODE:
			return { ...state, mode: action.payload , slides: action.surce, indexImg: 0}
		default: return state;
	}
}

export default rootReducer;
