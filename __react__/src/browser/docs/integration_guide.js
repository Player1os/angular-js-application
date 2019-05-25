/* @flow */

// Load app modules.
import Navigation from '../app/Navigation';
import Sidebar from './sidebar';
import RollableHeadersScript from './rollable_headers_script';

// Load npm modules.
import React from 'react';
import {
	Nav,
	NavItem,
} from 'react-bootstrap';

export default () => (
	<div className="bg-app">
		<Navigation />
		<div id="docs-container">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="row">
							<Sidebar activeKeyValue={3} />
							<div className="col-lg-9">
								<div className="card">
									<div className="card__body card__body--p-45">
										<h2>Integration Guide</h2>
										<p>All communication with the Tributit server uses HTTP requests sent to the server's <em>REST API</em>.</p>
										<p>To work correctly, the game must be capable of reliably sending the following messages to the Tributit server:</p>

										<h3>Installation Event</h3>
										<p>This notifies the Tributit server that a player has just purchased/installed or otherwise confirmed his use of the promoted game.</p>
										<p>The Tributit server then attributes this event to a campaign url click event that preceded the installation.</p>
										<p><strong>Requirement:</strong> This message must be sent each time the game runs at the beginning of the game session.</p>
										<p>The following is a template for the HTTP request used to notify the Tributit server that an installation has occurred:</p>

<pre>
<code>
POST /api/installation HTTP/1.1{'\n'}
<strong>Host:</strong> trbt.it{'\n'}
<strong>Content-Type:</strong> application/json{'\n'}
{'{'}{'\n'}
{'  '}<span style={{color: 'seagreen'}}>// The token generated for you by the tributit server, used to identify your game.</span>{'\n'}
{'  '}<strong>&quot;game_token&quot;</strong>: &quot;<span style={{color: 'darkslateblue'}}>[game_token]</span>&quot;,{'\n'}
{'  '}<strong>&quot;player_tokens&quot;</strong>: {'{'}{'\n'}
{'  '}{'  '}<span style={{color: 'seagreen'}}>// One or more unique identifiers for the player (for instance the Steam Id).</span>{'\n'}
{'  '}{'  '}&quot;<span style={{color: 'darkorange'}}>[identifier_type]</span>&quot;: &quot;<span style={{color: 'hotpink'}}>[unique_player_token]</span>&quot;{'\n'}
{'  '}{'}'}{'\n'}
{'}'}{'\n'}
</code>
</pre>

										<h3 className="rollable-header">
											<span className="rollable-toggle fa fa-chevron-down"></span><span className="hidden rollable-toggle fa fa-chevron-up"></span> Example 1 (Single Identifier: Steam)
										</h3>
										<div className="rollable-body hidden">
											<p>We'll be tracking our steam game called <em>Tetris Ultimate 4000</em>, which we have registered at Tributit as <code>tetris-ultimate-4000</code>.</p>
<pre>
<code>
POST /api/installation HTTP/1.1
<strong>Host:</strong> trbt.it
<strong>Content-Type:</strong> application/json
{'{'}{'\n'}
{'  '}<strong>&quot;game_token&quot;</strong>: &quot;<span style={{color: 'darkslateblue'}}>tetris-ultimate-4000</span>&quot;,{'\n'}
{'  '}<strong>&quot;player_tokens&quot;</strong>: {'{'}{'\n'}
{'  '}{'  '}&quot;<span style={{color: 'darkorange'}}>steam-id</span>&quot;: &quot;<span style={{color: 'hotpink'}}>76561198081274362</span>&quot;{'\n'}
{'  '}{'}'}{'\n'}
{'}'}{'\n'}
</code>
</pre>
										</div>

										<h3 className="rollable-header">
											<span className="rollable-toggle fa fa-chevron-down"></span><span className="hidden rollable-toggle fa fa-chevron-up"></span> Example 2 (Single Identifier: Apple)
										</h3>
										<div className="rollable-body hidden">
											<p>Our game's been doing good so we've released our game for the iOS's App Store. Since we'd also like to track the iOS users of our game, we can simply use a different identifier like this.</p>
<pre>
<code>
POST /api/installation HTTP/1.1
<strong>Host:</strong> trbt.it
<strong>Content-Type:</strong> application/json
{'{'}{'\n'}
{'  '}<strong>&quot;game_token&quot;</strong>: &quot;<span style={{color: 'darkslateblue'}}>tetris-ultimate-4000</span>&quot;,{'\n'}
{'  '}<strong>&quot;player_tokens&quot;</strong>: {'{'}{'\n'}
{'  '}{'  '}&quot;<span style={{color: 'darkorange'}}>ios-app-store-id</span>&quot;: &quot;<span style={{color: 'hotpink'}}>d29cb5ce580ac6c73980a81bb07645d0249d398a</span>&quot;{'\n'}
{'  '}{'}'}{'\n'}
{'}'}{'\n'}
</code>
</pre>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<RollableHeadersScript />
	</div>
);
