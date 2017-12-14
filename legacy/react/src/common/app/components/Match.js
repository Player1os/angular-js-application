/* @flow */

// Load npm modules.
import React from 'react';
import {
	Match as ReactRouterMatch,
	Redirect,
} from 'react-router';
import {
	connect,
} from 'react-redux';

const haveAccess = (viewer, authorized) => {
	return authorized
		? viewer
		: true;
};

const Match = ({
	authorized,
	component: Component,
	render,
	viewer,
	...props,
}) => (
	<ReactRouterMatch
		{...props}
		render={(renderProps) => (
			haveAccess(
				viewer,
				authorized
			)
			? render ? render(renderProps) : <Component {...renderProps} />
			: <Redirect
					to={{
						pathname: '/app/sign/login',
						state: { from: renderProps.location },
					}}
				/>
		)}
	/>
);

Match.propTypes = {
	authorized: React.PropTypes.bool,
	component: React.PropTypes.func,
	render: React.PropTypes.func,
	viewer: React.PropTypes.object,
};

export default connect((state) => {
	return {
		viewer: state.users.viewer,
	};
})(Match);
