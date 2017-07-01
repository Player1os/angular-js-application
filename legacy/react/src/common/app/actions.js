/* @flow weak */

// Load npm modules.
import {
	fetchGames
} from '../games/actions';

export const APP_OFFLINE = 'APP_OFFLINE';
export const APP_ONLINE = 'APP_ONLINE';
export const APP_SET_LOCATION = 'APP_SET_LOCATION';
export const APP_SHOW_MENU = 'APP_SHOW_MENU';
export const APP_START = 'APP_START';
export const APP_STORAGE_LOAD = 'APP_STORAGE_LOAD';

export const FETCH_ALL_DATA = 'FETCH_ALL_DATA';
export const FETCH_ALL_DATA_START = 'FETCH_ALL_DATA_START';
export const FETCH_ALL_DATA_SUCCESS = 'FETCH_ALL_DATA_SUCCESS';
export const FETCH_ALL_DATA_ERROR = 'FETCH_ALL_DATA_ERROR';
export const FETCH_ALL_DATA_FAILURE = 'FETCH_ALL_DATA_FAILURE';

export const setLocation = (location) => {
	return {
		type: APP_SET_LOCATION,
		payload: { location },
	};
};

export const EMPTY_ACTION = {
	type: '',
	payload: '',
};

export const start = () => {
	const loadStorage = async (dispatch, storageEngine) => {
		const state = await storageEngine.load();

		dispatch({
			type: APP_STORAGE_LOAD,
			payload: state,
		});
	};

	return ({ dispatch, storageEngine, getState }) => {
		loadStorage(dispatch, storageEngine, getState).finally(() => {
			console.log("Storage engine loaded & APP started");

			if (getState().auth && getState().auth.accessToken && getState().auth.token !== null) {
				dispatch(fetchGames());
			}
		});

		return {
			type: APP_START,
		};
	};
};

export const fetchAllDataAfterLogin = () => {
	return ({ dispatch, getState }) => {
		const getPromise = async () => {
			try {
				await dispatch(fetchGames());
			} catch (err) {
				console.log(err);
			}
		};

		return {
			type: FETCH_ALL_DATA,
			payload: getPromise(),
		};
	};
};
