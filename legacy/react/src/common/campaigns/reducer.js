/* @flow weak */
import { Record } from '../transit';
import { Map } from 'immutable';

import Campaign from './campaign';

import * as actions from './actions';

const State = Record({
	selected: null,
	campaigns: new Map(),
	isLoading: true,
	error: false
}, 'campaign');

const campaignReducer = (state = new State(), action) => {

	switch (action.type) {

		case actions.FETCH_CAMPAIGNS_SUCCESS:
		{

			let campaigns = {};

			for (let campaign of action.payload.data) {
				campaign = new Campaign(campaign);
				campaigns[campaign._id] = campaign;
			}

			state = state.set('isLoading', false);
			state = state.set('error', false);

			return state.update('campaigns', map => map.merge(campaigns));
		}

		default:
			return state;

	}
};

export default campaignReducer;
