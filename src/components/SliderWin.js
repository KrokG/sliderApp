import React from 'react';
import { Link } from 'react-router-dom';
import { setMainWin} from '../store/actions';
import Slider from './Slider';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class SliderWin extends React.Component {
	render() {
		const {setMainWin} = this.props;
		return (
			<div className='app__win-slider'>
				<Slider />
				<Link to='/' onClick={() => (setMainWin()) }><div className='win-slider__button'>back</div></Link>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		win: state.win,
	};
};

const mapActionToProps = (dispath) => {
	return{
		setMainWin: bindActionCreators(setMainWin,dispath),
	}
}

const WrappedSliderWin = connect(mapStateToProps, mapActionToProps)(SliderWin);

export default WrappedSliderWin;
