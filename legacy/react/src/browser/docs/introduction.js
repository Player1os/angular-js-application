/* @flow */

// Load app modules.
import Navigation from '../app/Navigation';
import Sidebar from './sidebar';

// Load npm modules.
import React from 'react';
import {
	Nav,
	NavItem,
} from 'react-bootstrap';

export default () => (
	<div className="bg-app">
		<Navigation />
		<div>
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="row">
							<Sidebar activeKeyValue={1} />
							<div className="col-lg-9">
								<div className="card">
									<div className="card__body card__body--p-45">
										<h2>Welcome to Tributit</h2>

										<p>Is a reliable tool for quntifying the influence of your various marketing efforts on user aquisition and traffic.</p>

										<p>Using Tributit you can easily:</p>
										<ol>
											<li>Attribute ROI to your active online marketing channels</li>
											<li>Seemlessly integrate into ad networks while protecting yourself from ad fraud</li>
											<li>Track the real performance of streamers nad broadcasters</li>
										</ol>

										<p><a href="mailto:tributit@cellense.com" target="_blank" className="contact-us-show">Contact us</a> to learn more about our various use case scenarios and real life success stories.</p>

										<p>Set up tracking for your game in 3 simple steps:</p>
										<ol>
											<li>Register your game</li>
											<li>Create a campaign link</li>
											<li>Start data tracking</li>
										</ol>

										<p>For more information, please refer to our <a href="/app/docs/usage_guide" target="_blank">usage guide</a>.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);
