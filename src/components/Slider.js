import React from 'react';
import { slideBack, slideNext } from '../store/actions'
import { connect } from 'react-redux';

class Slider extends React.Component {
	render() {
		const dispatch = this.props.dispatch;
		const index = this.props.indexImg;
		const src = this.props.slides[index];
		const Img = () => (<img className='slide__img' src={src} alt='' />);
		return (
			<div className='win-slider__slider'>
				<button onClick={() => { (dispatch(slideBack(this.props))) }}>back</button>
				<div className='slider__slide'>
					<Img/>
				</div>
				<button onClick={() => { (dispatch(slideNext(this.props))) }}>next</button>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		win: state.win,
		indexImg: state.indexImg,
		slides: state.slides,
		mode: state.mode,
	};
};

const WrappedSlider = connect(mapStateToProps)(Slider);


export default WrappedSlider;
