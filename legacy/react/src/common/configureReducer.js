/* @flow weak */

// Load app modules.
import app from './app/reducer'; // TODO: THIS IS NOT USED! WHY IS IT HERE??
import auth from './auth/reducer';
import config from './config/reducer';
import device from './device/reducer';
import games from './games/reducer';
import campaigns from './campaigns/reducer';
import intl from './intl/reducer';
import users from './users/reducer';
import modal from './modal/reducer';
import {
	fieldsReducer as fields,
} from './lib/redux-fields';
import {
	updateStateOnStorageLoad,
} from './configureStorage';
import * as actions from './app/actions';

// Load npm modules.
import {
	combineReducers,
} from 'redux';
import {
	Record,
} from 'immutable';

const InitialState = Record({
	isFetching: true
});
const initialState = new InitialState;

const resetStateOnSignOut = (reducer, initialState) => {
	return (state, action) => {
		// Reset app state on sign out, stackoverflow.com/q/35622588/233902.
		/*
		if (false) {
			// Preserve state without sensitive data.
			state = {
				app: state.app,
				config: initialState.config,
				device: initialState.device,
				intl: initialState.intl,
				users: initialState.users,
			games: initialState.games,
			};
		}
		*/
		return reducer(state, action);
	};
};

function appReducer(state = initialState, action) {
	if (!(state instanceof InitialState)) {
		return initialState;
	}

	switch (action.type) {
		case actions.FETCH_ALL_DATA_START:
		{
			return state.set('isFetching', true);
		}
		case actions.FETCH_ALL_DATA_ERROR:
		case actions.FETCH_ALL_DATA_SUCCESS:
		{
			return state.set('isFetching', false);
		}
	}

	return state;
}

const configureReducer = (initialState: Object) => {
	let reducer = combineReducers({
		app: appReducer,
		auth,
		config,
		device,
		games,
		campaigns,
		fields,
		modal,
		intl,
		users,
	});

	// The power of higher-order reducers, http://slides.com/omnidan/hor
	reducer = resetStateOnSignOut(reducer, initialState);
	reducer = updateStateOnStorageLoad(reducer);

	return reducer;
};

export default configureReducer;
