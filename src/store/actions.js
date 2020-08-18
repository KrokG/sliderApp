export const SET_MODE_MAIN_WIN = 'SET_MODE_MAIN_WIN';
export const SET_MODE_SLIDER_WIN = 'SET_MODE_SLIDER_WIN';
export const SLIDE_BACK = 'SLIDE_BACK'
export const SLIDE_NEXT = 'SLIDE_NEXT'
export const CHANGE_MODE = 'CHANGE_MODE'

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

export const slideBack = (state) => {
  let sizeArrayOfImg = state.slides.length
  let index = state.indexImg
  index--;
  index = index < 0 ? sizeArrayOfImg - 1 : index;
  return {
    type: SLIDE_BACK,
    payload: index,
  }
}

export const slideNext = (state) => {
  let sizeArrayOfImg = state.slides.length
  let index = state.indexImg
  index++;
  index = index > sizeArrayOfImg - 1 ? 0 : index;
  return {
    type: SLIDE_NEXT,
    payload: index,
  }
}

export const changeMode = (state) =>{
  let mode = state.mode === 'local' ? 'server': 'local';
  let surce = mode === 'local' ? state.localImg: state.serverImg;
  return {
    type: 'CHANGE_MODE',
    payload: mode,
    surce: surce,
  }
}
