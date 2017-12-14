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
							<Sidebar activeKeyValue={2} />
							<div className="col-lg-9">
								<div className="card">
									<div className="card__body card__body--p-45">
										<h2>Usage Guide</h2>
										<p>This document serves as a step by step guide to get conversion and attribution tracking running for any game published on platforms such as Valve's Steam, Apple's App Store, etc.</p>
										<p>For this guide we'll assume we're working with a game called <em>Tetris Ultimate 4000</em> which the developer already published on <em>Steam</em> and can be seen on their pages at <a href="http://store.steampowered.com/app/123456/" target="_blank">http://store.steampowered.com/app/123456/</a>.</p>
										<p>We also assume that we already have an analytics platform such as <em>Google Analytics</em> set up for our game. Our goal is to set up tracking for a campaign on <em>Facebook</em>, to promote our game, (specifically our game's <em>steam page</em> <a href="http://store.steampowered.com/app/123456/">http://store.steampowered.com/app/123456/</a>).</p>
										<p>As you'll see it's very easy to generate as many campaigns as we need after we set up tracking for our game in steps 1 and 2.</p>

										<h3 className="rollable-header">
											<span className="rollable-toggle fa fa-chevron-down"></span><span className="hidden rollable-toggle fa fa-chevron-up"></span> Step 1: Register the game
										</h3>
										<div className="rollable-body hidden">
											<p>The Tributit server first needs to know about <em>Tetris Ultimate 4000</em> before it can start tracking. After you've <a href="/app/sign/register" target="_blank">signed up for a user account</a>, you can fill out the <em>Create game</em> form available at the <a href="/app/games/" target="_blank">main page</a>.</p>
											<p>Tributit can send <em>event postbacks</em> to your analytics platform of choice. To enable this, we'll need you to provide for us the following information, using our <a href="mailto:tributit@cellense.com" target="_blank">contact form</a>:</p>
											<ol>
												<li>The <em>token</em> of the game, you just created. We'll be using <code>tetris-ultimate-4000</code> here.</li>
												<li>A token or credentials used to communicate with the analytics platform. Since we're using Google Analytics, we'll need an <em>access_token</em> for the project we have set up. The access_token should be something like <code>UA-54321-6</code>.</li>
												<li>A description of the specific information that will be sent to the analytics platform. The postback can contain any information regarding the attribution process, for instance:
													<ul>
														<li>the user's attribution status (did she just view the ad, did she start playing after viewing the ad, or did she just start playing without being engaged by any of our monitored channels)</li>
														<li>whether the user has been reactivated by a campaign (i.e. she started playing long ago, stopped and then started playing after watching a streamer)</li>
													</ul>
												</li>
											</ol>
											<p>Note, that this infomation depends on the analytics platform you're using and we'll also need to know the specifics for the outputs you'd like to receive. We aren't limited to a single output, we could just as easily output to multiple channels including your own in-house tracking solution.</p>
										</div>

										<h3 className="rollable-header">
											<span className="rollable-toggle fa fa-chevron-down"></span><span className="hidden rollable-toggle fa fa-chevron-up"></span> Step 2: Integrate Tributit into your game
										</h3>
										<div className="rollable-body hidden">
											<p>For the attribution tracking to work we need the game to communicate with our servers. The game needs to send a single short message to the Tributit server each time it runs, which contains the following data:</p>
											<ol>
												<li>The <em>game_token</em> we registered in the previous step. This is, again, <code>tetris-ultimate-4000</code>.</li>
												<li>The <em>player_token</em>, i.e. a unique identifier for the current player.</li>
											</ol>
											<p>Since we're working with a steam game we can simply use the <em>steam_id</em> (a unique player identifier provided by the steam platform). It should look something like this <code>76561198081274362</code>.</p>
											<p>If your game is developed using the <em>Unity framework</em> we strongly recommend using our <em>Tributit SDK for Unity</em>, which you'll find at <a href="https://github.com/Cellense/tributit-unity-sdk" target="_blank">https://github.com/Cellense/tributit-unity-sdk</a>.</p>
											<p>We're currently working on creating other SDKs so please <a href="mailto:tributit@cellense.com" target="_blank">let us know</a> if you'd like one for your game's platform.</p>
											<p>Another option is for you to use our REST API. For technical details on how to integrate the API into your game and communicate with the Tributit server, please refer to our <a href="/app/docs/integration_guide" target="_blank">integration guide</a>.</p>
										</div>

										<h3 className="rollable-header">
											<span className="rollable-toggle fa fa-chevron-down"></span><span className="hidden rollable-toggle fa fa-chevron-up"></span> Step 3: Create a campaign
										</h3>
										<div className="rollable-body hidden">
											<p>We're now ready to create our first campaign. After finishing step 1, the Tributit server generated a page for our game, which we'll now use to create campaigns. We can find this page by simply clicking on the newly created game in the list of games at the <a href="/app/games/" target="_blank">main page</a>.</p>
											<p>The page contains a link to a simple <em>Create campaign</em> form that generates campaign links. The <em>campaign link</em> is a link that points to the <em>destination url</em> we filled in step 1. Optionally you can choose a different <em>destination url</em> specific to this campaign, as described in the Create campaign form</p>
											<p>Note, that the <em>campaign_link</em> is always <a href="http://game_token.trbt.it/campaign_token" target="_blank"><code>http://<span style={{ color: 'hotpink' }}>[game_token]</span>.trbt.it/<span style={{color: 'seagreen'}}>[campaign_token]</span></code></a>.</p>
											<p>Assuming we created a campaign link with the name <em>Facebook US: new shape promo</em>. We can now place our campaign link <a href="http://tetris-ultimate-4000.trbt.it/facebook_us__new_shape_promo" target="_blank">http://tetris-ultimate-4000.trbt.it/facebook_us__new_shape_promo</a> link on any post or banner.</p>
										</div>

										<h3 className="rollable-header">
											<span className="rollable-toggle fa fa-chevron-down"></span><span className="hidden rollable-toggle fa fa-chevron-up"></span> How does it work?
										</h3>
										<div className="rollable-body hidden">
											<p>If a user clicks on the link, she'll be instantly redirected to the landing page <a href="http://store.steampowered.com/app/123456/" target="_blank">http://store.steampowered.com/app/123456/</a>.</p>
											<p>If the same user would then purchase, install and run the game for the first time, Tributit will attribute this installation to the click event that happened earlier and notify all the output channels specified in step 1, that a conversion occurred for the <em>Facebook US: new shape promo</em> campaign.</p>
										</div>

										<h3 className="rollable-header">
											<span className="rollable-toggle fa fa-chevron-down"></span><span className="hidden rollable-toggle fa fa-chevron-up"></span> [Optional] Step 4: Additional campaign features
										</h3>
										<div className="rollable-body hidden">
											<p>These are special features that can be added individually for each campaign, please contact us for more information on setting them up for your campaign.</p>
											<h4>Other events</h4>
											<p>Tributit can notify your analytics platform of other related events like individual <em>click events</em>, <em>user reactivation events</em>, etc.</p>
											{/*
											<h4>Custom data in click events</h4>

											<p>Tributit can store additional information for each click event, which will then be sent back to your analytics platform once a successful conversion is tracked. This can be useful if you wish to <em>integrate Tributit into your own tracking solution</em>.</p>
											<ol>
												<li>The additional information is written as <a href="http://game-name.trbt.it/campaign-name?optional-parameters">[optional_parameters]</a></span><span>&nbsp;in the format of your choosing that become part of the campaign url: </span><span className="c2 c3 c17"><a className="c4" href="https://www.google.com/url?q=http://game-name.trbt.it/campaign-name?optional-parameters&amp;sa=D&amp;ust=1471480100364000&amp;usg=AFQjCNESNJUUPHTf-Haxc0A7_HDMtVPDWQ">http://</a></span><span className="c3 c14"><a className="c4" href="https://www.google.com/url?q=http://game-name.trbt.it/campaign-name?optional-parameters&amp;sa=D&amp;ust=1471480100364000&amp;usg=AFQjCNESNJUUPHTf-Haxc0A7_HDMtVPDWQ">[game_token].</a></span><span className="c2 c3 c17"><a className="c4" href="https://www.google.com/url?q=http://game-name.trbt.it/campaign-name?optional-parameters&amp;sa=D&amp;ust=1471480100364000&amp;usg=AFQjCNESNJUUPHTf-Haxc0A7_HDMtVPDWQ">trbt.it/</a></span><span className="c14 c3"><a className="c4" href="https://www.google.com/url?q=http://game-name.trbt.it/campaign-name?optional-parameters&amp;sa=D&amp;ust=1471480100365000&amp;usg=AFQjCNFe4it6Ihvc72hd0vcglRSOnQ8Gyg">[campaign_token]</a></span><span className="c2 c3 c17"><a className="c4" href="https://www.google.com/url?q=http://game-name.trbt.it/campaign-name?optional-parameters&amp;sa=D&amp;ust=1471480100365000&amp;usg=AFQjCNFe4it6Ihvc72hd0vcglRSOnQ8Gyg">?</a></span><span className="c3 c17 c21"><a className="c4" href="https://www.google.com/url?q=http://game-name.trbt.it/campaign-name?optional-parameters&amp;sa=D&amp;ust=1471480100365000&amp;usg=AFQjCNFe4it6Ihvc72hd0vcglRSOnQ8Gyg">[optional_parameters]</a></span><span>.</span></li><li className="c0 c6"><span>Once a successful conversion occurs and the installation is attributed to an earlier click event, the stored information for this click event is retrieved and sent</span><span>&nbsp;back to your analytics platform&rsquo;s url </span><span className="c2 c3 c17"><a className="c4" href="https://www.google.com/url?q=http://your-platforms-url?optional-parameters&amp;sa=D&amp;ust=1471480100366000&amp;usg=AFQjCNGPGOU3E9SZZ5KctfBNyc88Dv8O4Q">http://</a></span><span className="c3 c17 c24"><a className="c4" href="https://www.google.com/url?q=http://your-platforms-url?optional-parameters&amp;sa=D&amp;ust=1471480100367000&amp;usg=AFQjCNFRuypT64MnfWsVPLDcmJTe3tfpQQ">[your-platform&#39;s-url]</a></span><span className="c2 c3 c17"><a className="c4" href="https://www.google.com/url?q=http://your-platforms-url?optional-parameters&amp;sa=D&amp;ust=1471480100367000&amp;usg=AFQjCNFRuypT64MnfWsVPLDcmJTe3tfpQQ">?</a></span><span className="c21 c3 c17"><a className="c4" href="https://www.google.com/url?q=http://your-platforms-url?optional-parameters&amp;sa=D&amp;ust=1471480100367000&amp;usg=AFQjCNFRuypT64MnfWsVPLDcmJTe3tfpQQ">[optional-parameters]</a></span><span>.</span></li></ol><div><p className="c8 c0">
											*/}
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
