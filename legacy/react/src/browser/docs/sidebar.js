/* @flow */

// Load app modules.
import Sidebar from './sidebar';

// Load npm modules.
import React from 'react';
import {
	Nav,
	NavItem,
} from 'react-bootstrap';

export default ({ activeKeyValue }) => (
	<div className="col-lg-3">
		<Nav bsStyle="pills" stacked activeKey={activeKeyValue}>
			<NavItem eventKey={1} href="/app/docs/introduction">Introduction</NavItem>
			<NavItem eventKey={2} href="/app/docs/usage_guide">Usage guide</NavItem>
			<NavItem eventKey={3} href="/app/docs/integration_guide">Integration guide</NavItem>
		</Nav>
	</div>
);
