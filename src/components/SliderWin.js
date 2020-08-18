import React from 'react'
import { Link } from 'react-router-dom'
import { setMainWin, changeMode } from '../store/actions'
import Slider from './Slider'
import { connect } from 'react-redux'

class SliderWin extends React.Component {
  render() {
    const dispatch = this.props.dispatch;
    return (
      <div>
        <Slider />
        <Link to='/' onClick={() => (dispatch(setMainWin())) }>back</Link>
    <button onClick={()=>(dispatch(changeMode(this.props)))}>{this.props.mode == 'local' ? 'server': 'local'}</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    win: state.win,
    indexImg: state.indexImg,
    slides: state.slides,
    mode: state.mode,
    serverImg: state.serverImg,
		localImg: state.localImg,
  };
};

const WrappedSliderWin = connect(mapStateToProps)(SliderWin);

export default WrappedSliderWin;
