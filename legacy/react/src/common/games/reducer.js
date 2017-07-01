/* @flow weak */
import { Record } from '../transit';
import { Map } from 'immutable';

import Game from './game';

import * as actions from './actions';

const State = Record({
	selected: null,
	games: new Map(),
	isLoading: true,
	error: false
}, 'game');

const gameReducer = (state = new State(), action) => {


	switch (action.type) {

		case actions.FETCH_GAMES_SUCCESS:
		{

			let games = {};

			for (let game of action.payload.data) {
				game = new Game(game);
				games[game._id] = game;
			}

			state = state.set('isLoading', false);
			state = state.set('error', false);

			return state.update('games', map => map.merge(games));
		}

		default:
			return state;

	}
};

export default gameReducer;
