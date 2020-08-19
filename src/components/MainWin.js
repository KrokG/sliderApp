import React from 'react';
import { Link } from 'react-router-dom';
import {setSliderWin} from '../store/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'

class MainWin extends React.Component{
	render(){
		const {setSliderWin} = this.props;
		return(
			<div className='app__main-win'>
				<div className='main-win__text'>Welcome to page</div>
				<Link to='/slider'
				 onClick={() => (setSliderWin())}><div className='main-win__button'>Slider</div></Link>
			</div>)
	}
}

const mapStateToProps = (state) => {
	return {
		win: state.win,
	};
};

const mapActionToProps = (dispatch) => {
	return{
		setSliderWin: bindActionCreators(setSliderWin,dispatch)
	};
};

const WrappedMainWin = connect(mapStateToProps, mapActionToProps)(MainWin);

export default WrappedMainWin;
