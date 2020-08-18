import img1 from './img/person1.png';
import img2 from './img/person2.png';
import img3 from './img/person3.png';
import img4 from './img/person4.png';

import img1s from './img/server/1.png';
import img2s from './img/server/2.png';
import img3s from './img/server/3.png';
import img4s from './img/server/4.png';
import img5s from './img/server/3.png';
import img6s from './img/server/4.png';
export const arrayOfImgLocal = [img1, img2, img3, img4];
export const arrayOfImgServer = [img1s, img2s, img3s, img4s, img5s, img6s];

export const initialState = {
	win: 'MainWin',
	indexImg: 0,
	slides: arrayOfImgLocal,
	mode: 'local',
	serverImg: arrayOfImgServer,
	localImg: arrayOfImgLocal,
}
