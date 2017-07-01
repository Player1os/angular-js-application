/* @flow */

// Load npm modules.
import React from 'react';
import {
	Link,
} from 'react-router';
import {
	ListGroupItem,
	Tooltip,
} from 'react-bootstrap';

class GamesListItem extends React.Component {
	static propTypes = {
		game: React.PropTypes.object,
		viewer: React.PropTypes.object,
	};

	render() {
		const {
			game,
		} = this.props;
		const GameDetailURL = `/app/games/detail/${game.token}`;

		const CampaignTooltip = (
			<Tooltip id="tooltip">
				The number of people who installed the game after clicking the campaign link
			</Tooltip>
		);

		/*
		<OverlayTrigger placement="top" overlay={CampaignTooltip}>
			<span className="badge">?</span>
		</OverlayTrigger>
		*/

		return (
			<ListGroupItem href={GameDetailURL}>
				<div className="row">
					<div className="col-lg-6">
						<strong>{game.name}</strong>
						<br/>
						<br/>
						token <code>{game.token}</code>
					</div>
					<div className="col-lg-6">
						<div className="row">
							<div className="col-lg-3 text-center">
								<strong>Campaigns</strong>
								<br/>
								{game.summary.campaigns}
							</div>
							<div className="col-lg-3 text-center">
								<strong>Clicks</strong>
								<br/>
								{game.summary.clicks}
							</div>
							<div className="col-lg-3 text-center">
								<strong>Installations</strong>
								<br/>
								{game.summary.installations}
							</div>
							<div className="col-lg-3 text-center">
								<strong>Conversions</strong>
								<br/>
								{game.summary.conversions}
							</div>
						</div>
					</div>
				</div>
			</ListGroupItem>
		);
	}
}

export default GamesListItem;
