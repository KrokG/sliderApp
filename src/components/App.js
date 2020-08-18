import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainWin from './MainWin'
import SliderWin from './SliderWin'

const App = (state)=> {
	return(
		<div>
			<Switch>
				<Route exact path='/' component={MainWin} />
				<Route exact path='/slider' component={SliderWin} />
			</Switch>
		</div>
	)
}
export default App;
