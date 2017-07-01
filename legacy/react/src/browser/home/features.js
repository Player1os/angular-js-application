/* @flow */

// Load npm modules.
import React from 'react';

export default () => (
	<div className="features">
		<div className="container">
			<div className="row">
				<div className="col-lg-12 text-center">
					<h2>Features</h2>
				</div>
				<div className="col-lg-6 text-center">
					<img src={require('../../../assets/images/landing/online-vendors.png')} width="100%" />
					<h3>Attribution for desktop online vendors</h3>
					<p>Platforms like Valve's Steam make it hard to measure the real performance of your marketing campaigns. Tributit is specifically designed to solve this problem and it works particularly well for the desktop platform.</p>
				</div>
				<div className="col-lg-6 text-center">
					<img src={require('../../../assets/images/landing/features_channels.png')} width="100%" />
					<h3>Works with any marketing channel</h3>
					<p>Tributit can be used to track the performance of email campaigns, social media, influencer broadcasts, ad networks, etc. If you can think of a place to put your link, Tributit can track it!</p>
				</div>
			</div>
		</div>
	</div>
);
