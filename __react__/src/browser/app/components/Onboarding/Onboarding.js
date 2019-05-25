/* @flow */

// Load npm modules.
import React from 'react';
import FontAwesome from 'react-fontawesome';
import {
	ProgressBar
} from 'react-bootstrap';

class Onboarding extends React.Component {
	render() {
		return (
			<div className="Onboarding">
				<div className="row">
					<div className="col-lg-12">
						<FontAwesome name="cogs" size='2x' />
						<h3>Your app is inactive</h3>
						<hr/>
						<p className="Onboarding__paragraph">Your iOS application, Geotag Photos Pro 2, is inactive. Click here to see our iOS quickstart guide to integrate our SDK quickly and easily.</p>
					</div>
					<div className="col-lg-5">
						<div className="Onboarding__progress-wrap">
							<ProgressBar bsStyle="success" now={40} />
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12">
						<a className="btn btn-primary" href="">Integrate tributit</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Onboarding;
