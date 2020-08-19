import React from 'react';
import { slideBack, slideNext, changeMode } from '../store/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Slider extends React.Component {
	getMode() {
		const {mode} = this.props
		return mode === 'local' ? 'server' : 'local';
	}

	getSurce() {
		const {serverImg, localImg, mode} = this.props
		return mode === 'local' ? serverImg : localImg;
	}

	getIndexNext(){
		const {indexImg, slides} = this.props
		let index = indexImg + 1;
		return index >= slides.length ? 0: index;
	}

	getIndexBack(){
		const {indexImg, slides} = this.props
		let index = indexImg - 1;
		return index >= 0 ? index: slides.length - 1;
	}

	render(){
		const { slideBack, slideNext, changeMode} = this.props;
		const index = this.props.indexImg;
		const src = this.props.slides[index];
		const Img = () => (<img className='slide__img' src={src} alt='' />);
		return (
			<div>
				<div className='win-slider__slider'>
					<button onClick={() => { (slideBack(this.getIndexBack())) }}>back</button>
					<div className='slider__slide'>
						<Img />
					</div>
					<button onClick={() => { slideNext(this.getIndexNext()) }}>next</button>
				</div>
				<div className='slide-mode__button' onClick={() => (changeMode(this.getMode(), this.getSurce()))}>{this.getMode() !== 'local' ? 'server' : 'local'}</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		mode: state.mode,
		indexImg: state.indexImg,
		slides: state.slides,
		serverImg: state.serverImg,
		localImg: state.localImg,
	};
};

const mapActionToProps = (dispatch) => {
	return {
		slideBack: bindActionCreators(slideBack, dispatch),
		slideNext: bindActionCreators(slideNext, dispatch),
		changeMode: bindActionCreators(changeMode, dispatch),
	};
}

const WrappedSlider = connect(mapStateToProps, mapActionToProps)(Slider);


export default WrappedSlider;
