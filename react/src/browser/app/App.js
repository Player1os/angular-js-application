/* @flow */

// Load styles.
import '../styles/app.scss';

// Load app modules.
import start from '../../common/app/start';
import {
	Match,
} from '../../common/app/components';
import ModalRoot from './components/Modal/ModalRoot';
import Home from '../home';
import Games from '../games/GamesPage';
import DocsIntroduction from '../docs/introduction';
import DocsIntegrationGuide from '../docs/integration_guide';
import DocsUsageGuide from '../docs/usage_guide';
import User from '../user/UserPage';
import Auth from '../auth/AuthPage';
import NotFound from '../notfound/NotFoundPage';

// Load npm modules.
import React from 'react';
import {
	Miss,
} from 'react-router';
import {
	connect,
} from 'react-redux';

let App = ({ currentLocale }) => (
	<div>
		{/* <Match exactly pattern="/" component={Home} /> */}
		<Match pattern="/app/games" component={Games} />
		{/* <Match pattern="/app/user/settings" component={User} /> */}
		<Match pattern="/app/docs/introduction" component={DocsIntroduction} />
		<Match pattern="/app/docs/integration_guide" component={DocsIntegrationGuide} />
		<Match pattern="/app/docs/usage_guide" component={DocsUsageGuide} />
		<Match pattern="/app/sign" component={Auth} />
		<ModalRoot />
		<Miss component={NotFound} />
	</div>
);

App.propTypes = {
	currentLocale: React.PropTypes.string.isRequired
};

App = connect((state) => {
	return {
		currentLocale: state.intl.currentLocale
	};
})(App);

export default start(App);
