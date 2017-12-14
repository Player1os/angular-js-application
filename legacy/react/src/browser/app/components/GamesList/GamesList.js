/* @flow */

// Load app modules.
import {
	GamesListItem
} from '../';

// Load npm modules.
import React from 'react';
import Alert from 'react-bootstrap/lib/Alert';
import {
	ListGroup
} from 'react-bootstrap';

class GamesList extends React.Component {

	constructor(props) {
		super(props);
	}

	static propTypes = {
		games: React.PropTypes.object
	};

	render() {
		const { games, isLoading } = this.props;
		const games_list = games.games.toList();

		return (
			<div>
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h2>Games</h2>
							<Alert>
								If you need <strong>event postbacks</strong> to your analytics platform of choice,
								please <a href="mailto:tributit@cellense.com" target="_black">contact us</a> an we ll get it up and running for you
							</Alert>
						</div>
					</div>
				</div>

				<div className="container">
					{(games.isLoading == false) ?
						(<ListGroup>
							{games_list.map((game) => {
								return (<GamesListItem key={game.token} game={game} />);
							})}
							</ListGroup>
					) : (
						<div className="text-center">
							<i className="fa fa-spinner fa-spin fa-3x fa-fw"></i>
						</div>
					)}
				</div>
			</div>
		);
	}
}

export default GamesList;
