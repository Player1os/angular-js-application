/* @flow */

// Load npm modules.
import React from 'react';
import {
	Match,
	Redirect,
} from 'react-router';
import {
	connect,
} from 'react-redux';
import {
	Navbar,
	Nav,
	NavItem,
	NavDropdown,
	MenuItem,
} from 'react-bootstrap';

const Navigation = ({ viewer }) => (
	<Navbar bsStyle='tributit'>
		<Navbar.Header>
			<Navbar.Toggle />
			<Navbar.Brand>
				<a className="navbar-brand" href="/">Tributit</a>
			</Navbar.Brand>
		</Navbar.Header>
		<Navbar.Collapse>
			<Nav>
				<NavItem eventKey={1} href="/app/games">Games</NavItem>
				<NavDropdown eventKey={2} title="Documentation" id="basic-nav-dropdown">
					<MenuItem eventKey={2.1} href="/app/docs/introduction">Introduction</MenuItem>
					<MenuItem eventKey={2.2} href="/app/docs/usage_guide">Usage guide</MenuItem>
					<MenuItem eventKey={2.3} href="/app/docs/integration_guide">Integration guide</MenuItem>
					<MenuItem divider />
					<MenuItem eventKey={2.5} href="mailto:tributit@cellense.com">Support</MenuItem>
				</NavDropdown>
			</Nav>
			<Nav pullRight>
				<NavDropdown eventKey={3} title="me@jakubkontra.cz" id="basic-nav-dropdown">
					{/*
					<MenuItem eventKey={3.1} href="/app/user/settings">Settings</MenuItem>
					<MenuItem divider />
					<MenuItem eventKey={3.2} href="/pricing" target="_blank">Pricing</MenuItem>
					<MenuItem eventKey={3.3} href="/features" target="_blank">Features</MenuItem>
					<MenuItem divider />
					*/}
					<MenuItem eventKey={3.4}>Logout</MenuItem>
				</NavDropdown>
			</Nav>
		</Navbar.Collapse>
	</Navbar>
);

Navigation.propTypes = {
	viewer: React.PropTypes.object,
};

export default connect((state) => {
	return {
		viewer: state.users.viewer,
	};
})(Navigation);
