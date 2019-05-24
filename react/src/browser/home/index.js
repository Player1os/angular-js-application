/* @flow */

// Load app modules.
import Header from './header';
import Stories from './stories';
import HowItWorks from './how_it_works';
import Features from './features';
import Platforms from './platforms';
import Team from './team';

// Load npm modules.
import React from 'react';

export default () => (
	<div className="landing">
		<Header />
		<Stories />
		<HowItWorks />
		<Features />
		<Platforms />
		<Team />
	</div>
);
