import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../common/history/history';
import HomePage from '../components/Home/Home';


export default () => (
	<Router history={history}>
		<div>
			<Switch>
				<Route exact path="/"component={HomePage} />
			</Switch>
		</div>
	</Router>
);
