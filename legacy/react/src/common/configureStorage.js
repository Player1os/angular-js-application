/* @flow weak */

// Load app modules.
import {
	APP_STORAGE_LOAD,
} from './app/actions';
import {
	fromJSON,
	toJSON,
} from './transit';

// Load npm modules.
import {
	Iterable,
} from 'immutable';
import invariant from 'invariant';
import storage from 'redux-storage';
import storageDebounce from 'redux-storage-decorator-debounce';

const stateToSave = [
	['fields'],
	['intl', 'currentLocale'],
	['users', 'viewer', 'games'],
	['auth'],
];

const invariantFeatureState = (state, feature) => {
	return invariant(
		Iterable.isIterable(state[feature]),
		`Storage persists only immutable iterables. '${feature}' is something else.`
	);
};

const updateState = (state, storageStateJson) => {
	// Test if empty.
	if (!storageStateJson || !Object.keys(storageStateJson).length) {
		return state;
	}

	try {
		fromJSON(storageStateJson).forEach(({ feature, featurePath, value }) => {
			// Test if can set.
			if (!(state[feature] && state[feature].hasIn(featurePath))) {
				return;
			}

			// As we can see, setIn always overrides the current value.
			// That's perfect for fields, currentLocale, or viewer.
			// But what if something is prefetched on the server? Then we would like
			// to merge locally cached data with fresh data from the server.
			// TODO: Add customUpdate.
			state[feature] = state[feature].setIn(featurePath, value);
		});
	} catch (error) {
		// Shouldn't happen, but if the data's invalid, there's not much we can do.
		console.log(error); // eslint-disable-line no-console
	}

	console.log("UPDATE STATE METHOD", state);
	return state;
};

const storageFilter = (engine) => {
	return {
		...engine,
		save(state) {
			if (!state) {
				return Promise.resolve();
			}

			// We don't filter by actions but by the app state structure.
			// That's fine because saving is debounced.
			const saveState = stateToSave.map(([feature, ...featurePath]) => {
				invariantFeatureState(state, feature);
				return {
					feature,
					featurePath,
					value: state[feature].getIn(featurePath),
				};
			});

			return engine.save(toJSON(saveState));
		},
	};
};

const createStorageMiddleware = (storageEngine) => {
	let decoratedEngine = storageFilter(storageEngine);
	decoratedEngine = storageDebounce(decoratedEngine, 300);

	return storage.createMiddleware(decoratedEngine);
};

export const updateStateOnStorageLoad = (reducer) => {
	return (state, action) => {
		if (action.type === APP_STORAGE_LOAD) {
			state = updateState(state, action.payload);
		}

		return reducer(state, action);
	};
};

const configureStorage = (initialState, createStorageEngine) => {
	const storageEngine = createStorageEngine
		&& createStorageEngine('redux-storage:tributit');
	const storageMiddleware = storageEngine
		&& createStorageMiddleware(storageEngine);

	return {
		STORAGE_SAVE: storage.SAVE,
		storageEngine,
		storageMiddleware,
	};
};

export default configureStorage;
