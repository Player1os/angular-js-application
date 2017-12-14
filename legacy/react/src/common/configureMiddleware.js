/* @flow weak */

// Load app modules.
import configureStorage from './configureStorage';
import errorToMessage from '../common/app/errorToMessage';
import validate from './validate';

// Load npm modules.
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import createLoggerMiddleware from 'redux-logger';

// Set axios middleware to add the x-access-token to the request headers if available.
const axiosMiddlewareOptions = {
	interceptors: {
		request: [
			(action, config) => {
				if (action.getState().auth.accessToken) {
					config.headers['x-access-token'] = action.getState().auth.accessToken;
				}

				return config;
			},
		],
	}
}

// All axios can be used, shown in axios documentation.
const client = axios.create({
	baseURL: '/',
	responseType: 'json',
});

// Like redux-thunk but with dependency injection.
const injectMiddleware = (deps) => {
	return ({ dispatch, getState }) => {
		return (next) => {
			return (action) => {
				return next(
					typeof action === 'function'
					? action({ ...deps, dispatch, getState })
					: action
				);
			}
		}
	}
};

const configureMiddleware = (initialState, platformDeps, platformMiddleware) => {
	const {
		STORAGE_SAVE,
		storageEngine,
		storageMiddleware,
	} = configureStorage(initialState, platformDeps.createStorageEngine);

	const middleware = [
		injectMiddleware({
			...platformDeps,
			getUid() {
				return platformDeps.uuid.v4();
			},
			now() {
				return Date.now();
			},
			storageEngine,
			validate,
		}),
		axiosMiddleware(client, axiosMiddlewareOptions),
		...platformMiddleware,
	];

	if (storageMiddleware) {
		middleware.push(storageMiddleware);
	}

	const enableLogger = (process.env.NODE_ENV !== 'production')
		&& (process.env.IS_BROWSER || initialState.device.isReactNative);

	// Logger must be the last middleware in chain.
	if (enableLogger) {
		const ignoredActions = [STORAGE_SAVE];

		const logger = createLoggerMiddleware({
			collapsed: true,
			predicate(getState, action) {
				return ignoredActions.indexOf(action.type) === -1;
			},
			// Convert immutable to JSON.
			stateTransformer(state) {
				return JSON.parse(JSON.stringify(state));
			},
		});

		middleware.push(logger);
	}

	return middleware;
};

export default configureMiddleware;
