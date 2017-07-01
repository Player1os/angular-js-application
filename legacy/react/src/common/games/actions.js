import {
	GAMES_GET,
	GAMES_GET_ALL,
	GAMES_CREATE
} from '../apiConstants';

import axios from 'axios';

export const FETCH_GAMES = 'FETCH_GAMES';
export const FETCH_GAMES_START = 'FETCH_GAMES_START';
export const FETCH_GAMES_SUCCESS = 'FETCH_GAMES_SUCCESS';
export const FETCH_GAMES_ERROR = 'FETCH_GAMES_ERROR';

export const CREATE_GAME = 'CREATE_GAME';
export const CREATE_GAME_START = 'CREATE_GAME_START';
export const CREATE_GAME_SUCCESS = 'CREATE_GAME_SUCCESS';
export const CREATE_GAME_ERROR = 'CREATE_GAME_ERROR';


function requestData() {
	return {type: FETCH_GAMES_START}
};

function receiveData(json) {
	return{
		type: FETCH_GAMES_SUCCESS,
		data: json
	}
};

function receiveError(json) {
	return {
		type: FETCH_GAMES_ERROR,
		data: json
	}
};


function requestCreateGameData() {
	return {type: CREATE_GAME}
};

function receiveCreateGameData(json) {
	return{
		type: CREATE_GAME_SUCCESS,
		data: json
	}
};

function receiveCreateGameError(json) {
	return {
		type: CREATE_GAME_ERROR,
		data: json
	}
};

export function fetchGames() {
	return ({ dispatch, getState }) => {

		return {
			types: ['FETCH_GAMES_START','FETCH_GAMES_SUCCESS','FETCH_GAMES_ERROR'],
			payload: {
				request:{
					url: '/api/game',
					method: 'GET',
					headers: {
						'Content-Type': 'application/json'
					}
				}
			}
		}
	}
}

export function createGame(fields) {
	return {
		types: ['CREATE_GAME_START','CREATE_GAME_SUCCESS','CREATE_GAME_ERROR'],
		payload: {
		request: {
			url: '/api/game',
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			data: {
				game_name: fields.game_name,
				game_token: fields.game_token + "1-gtkoen",
				destination_url: fields.destination_url
			}
		}
		}
	}
}
