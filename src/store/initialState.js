import {arrayOfImgLocal, arrayOfImgServer} from './img/index'

export const initialState = {
	win: 'MainWin',
	indexImg: 0,
	slides: arrayOfImgLocal,
	mode: 'local',
	serverImg: arrayOfImgServer,
	localImg: arrayOfImgLocal,
}
