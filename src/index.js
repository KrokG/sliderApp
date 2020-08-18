import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import { connect, Provider } from 'react-redux'
import {store} from './store/store'

import App from './components/App'

class MainComponent extends React.Component{
	render(){
		//const dispatch = this.props.dispatch;
		console.log(this.props)
		return(
			<BrowserRouter>
				<App/>
			</BrowserRouter>
		)
	}
}

const mapStateToProps = (state)=> {
	return {
    win: state.win,
    indexImg: state.indexImg,
    slides: state.slides,
    mode: state.mode,
	};
};

const WrappedMainComponent = connect(mapStateToProps)(MainComponent);

ReactDOM.render(
	<Provider store={store}>
		<WrappedMainComponent/>
	</Provider>,
	document.getElementById('root')
)
