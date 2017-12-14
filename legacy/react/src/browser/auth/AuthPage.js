/* @flow */

// Load app modules.
import AuthSignInPage from './AuthSignInPage';
import AuthSignUpPage from './AuthSignUpPage';
import {
	setLocation,
} from '../../common/app/actions';

// Load npm modules.
import React from 'react';
import {
	Match,
} from 'react-router';
import {
	connect,
} from 'react-redux';

const AuthPage = ({ dispatch, pathname, viewer }) => (
	<div className="bg-app container--form">
		<Match pattern={`${pathname}/register`} component={AuthSignUpPage} />
		<Match pattern={`${pathname}/login`} component={AuthSignInPage} />
	</div>
);

AuthPage.propTypes = {
	pathname: React.PropTypes.string.isRequired,
	viewer: React.PropTypes.object,
};

export default connect((state) => {
	return {
		viewer: state.users.viewer
	};
})(AuthPage);
