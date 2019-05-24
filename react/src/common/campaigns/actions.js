
// Load app modules.
import {
	GAMES_GET,
	GAMES_GET_ALL,
	GAMES_CREATE
} from '../apiConstants';

// Load npm modules.
import axios from 'axios';

export const FETCH_CAMPAIGNS = 'FETCH_CAMPAIGNS';
export const FETCH_CAMPAIGNS_START = 'FETCH_CAMPAIGNS_START';
export const FETCH_CAMPAIGNS_SUCCESS = 'FETCH_CAMPAIGNS_SUCCESS';
export const FETCH_CAMPAIGNS_ERROR = 'FETCH_CAMPAIGNS_ERROR';

export function fetchCampaignsByGameToken() {
	return ({ dispatch, getState }) => {
		return {
			type: 'FETCH_CAMPAIGN',
			payload: {
				request: {
					url: '/data/campaign/a_game',
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
					},
				},
			},
		};
	};
}

export function createCampaign(fields) {
	return {
		types: ['CREATE_CAMPAIGN_START','CREATE_CAMPAIGN_SUCCESS','CREATE_CAMPAIGN_ERROR'],
		payload: {
			request: {
				url: '/api/game',
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				data: fields,
			},
		},
	};
}
