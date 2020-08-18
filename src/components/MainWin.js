import React from 'react';
import { Link } from 'react-router-dom';
import {setSliderWin} from '../store/actions';
import {connect} from 'react-redux';

class MainWin extends React.Component{
	render(){
		const dispatch = this.props.dispatch;
		return(
			<div className='app__main-win'>
				<div className='main-win__text'>Welcome to page</div>
				<Link to='/slider'
				 onClick={
					() => {(dispatch(setSliderWin()))}
				}><div className='main-win__button'>Slider</div></Link>
			</div>)
	}
}

const mapStateToProps = (state)=> {
	return {
		win: state.win,
		indexImg: state.indexImg,
		slides: state.slides,
	};
};

const WrappedMainWin = connect(mapStateToProps)(MainWin);

export default WrappedMainWin;
