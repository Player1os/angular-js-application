/* @flow */

// Load npm modules.
import React from 'react';

export default () => (
	<div className="stories stories--star-crusade" style={{ backgroundImage: 'url(' + require('../../../assets/images/landing/star-crusade/bg.jpg') + ')'}}>
		<div className="container">
			<div className="row" style={{marginTop: "320px"}}>
				<div className="col-lg-12 text-center" style={{marginBottom: "60px"}}>
					<img src="" alt=""/>
					<img src={require('../../../assets/images/landing/star-crusade/icon.png')} />
					<h2>Star crusade</h2>
					<p>Three examples of what we have achieved for <br /> Zimad and their game Star Crusade.</p>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-4 text-center">
					<h3>60%</h3>
					<p><strong>of our client's bill amount saved</strong> with protection against ad fraud based on inflated click numbers.</p>
				</div>
				<div className="col-lg-4 text-center">
					<h3>70%</h3>
					<p><strong>of the marketing budget saved</strong> by identifying the marketing channels that were generating most of the game's actual installations.</p>
				</div>
				<div className="col-lg-4 text-center">
					<h3>80%</h3>
					<p><strong>of our client's online influencers cleaned based</strong> on their actual ROI and according to their real performance.</p>
				</div>
			</div>
		</div>
	</div>
);
