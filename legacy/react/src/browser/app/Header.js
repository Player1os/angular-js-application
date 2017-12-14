/* @flow */

// Load npm modules.
import React from 'react';
import { connect } from 'react-redux';

const Header = ({ viewer }) => (
	<div>header</div>
);

Header.propTypes = {
	viewer: React.PropTypes.object,
};

export default connect((state) => {
	return {
		viewer: state.users.viewer,
	};
})(Header);
