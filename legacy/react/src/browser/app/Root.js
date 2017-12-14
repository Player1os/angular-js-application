/* @flow */

// Load app modules.
import App from './App';
import {
	setLocation,
} from '../../common/app/actions';

// Load npm modules.
import React from 'react';
import BrowserHistory from 'react-history/BrowserHistory';
import {
	Provider as ReactReduxProvider,
	connect,
} from 'react-redux';
import {
	StaticRouter,
} from 'react-router';

// Type declarations.
type RouterProps = {
	dispatch: () => void,
	pathname: ?string,
};
type RootProps = {
	store: Object,
};

// TODO: Use ControlledRouter once it will be released.
const Router = ({ dispatch, pathname }: RouterProps) => (
	<BrowserHistory>
		{({ history, action, location }) => {
			if (location.pathname !== pathname) {
				setImmediate(() => {
					dispatch(setLocation(location));
				});
			}

			return (
				<StaticRouter
					action={action}
					blockTransitions={history.block}
					key={pathname} // github.com/yahoo/react-intl/issues/234#issuecomment-163366518
					location={location}
					onPush={history.push}
					onReplace={history.replace}
				>
					<App />
				</StaticRouter>
			);
		}}
	</BrowserHistory>
);

const ConnectedRouter = connect((state) => {
	return {
		pathname: state.app.location && state.app.location.pathname,
	};
})(Router);


// We needs such Root for vanilla hot reloading.
const Root = ({ store }: RootProps) => (
	<ReactReduxProvider store={store}>
		<ConnectedRouter />
	</ReactReduxProvider>
);

export default Root;
