/* @flow */

// Load app modules.
import {
	GamesList,
} from '../app/components';
import Navigation from '../app/Navigation';
import GamesDetailPage from './GamesDetailPage';

import {
	openModalCreateGame,
} from '../../common/modal/actions';

import {
	fetchGames,
} from '../../common/games/actions';

// Load npm modules.
import React from 'react';
import {
	Match,
} from 'react-router';
import {
	connect,
} from 'react-redux';
import {
	Button,
} from 'react-bootstrap';

class GamesPage extends React.Component {

	constructor(props) {
		super(props);
		this.openModalCreateGame = this.openModalCreateGame.bind(this);
	}

	static propTypes = {
		pathname: React.PropTypes.string.isRequired,
		viewer: React.PropTypes.object,
		games: React.PropTypes.object,
		auth: React.PropTypes.object,
		openModalCreateGame: React.PropTypes.func,
		fetchGames: React.PropTypes.func
	};

	openModalCreateGame() {
		const { openModalCreateGame } = this.props;
		openModalCreateGame();
	}

	render() {
		const { pathname, viewer, games } = this.props;
		return (
			<div className="bg-app">
				<Navigation />
				<Match exactly pattern={pathname} render={() => (
					<div>
						<div className="container">
							<GamesList games={games} isLoading={games.games.isLoading} />
							<div className="row">
								<div className="col-lg-12">
									<div className="text-center">
										<Button bsStyle="primary" onClick={this.openModalCreateGame.bind(this)}>
											<span className="glyphicon glyphicon-plus"></span> Create game
										</Button>
										<p>
											<br />
											If this is your first time using Tributit we strongly recommend reading our <a href="/app/docs/usage_guide" target="_black">usage guide</a>.
											<br />
											<a href="mailto:tributit@cellense.com" target="_black">Contact us</a> if you need help setting up tracking in your game.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					)}
				/>
				<Match pattern={`${pathname}/detail/:game_token`} component={GamesDetailPage} />
			</div>
		);
	}
}

export default connect((state) => {
	return {
		auth: state.auth,
		games: state.games,
		viewer: state.users.viewer,
		modalTypes: state.modal.modalTypes,
	};
}, {openModalCreateGame, fetchGames})(GamesPage);
