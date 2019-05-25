/* @flow */

// Load app modules.
import configureReporting from '../common/configureReporting';
import configureStore from '../common/configureStore';
import Root from './app/Root';
import {
	fromJSON,
} from '../common/transit';

// Load npm modules.
import React from 'react';
import ReactDOM from 'react-dom';
import createStorageEngine from 'redux-storage-engine-localstorage';
import uuid from 'uuid';

// Load the initial state from a serialized global variable.
const initialState = fromJSON(window.__INITIAL_STATE__); // eslint-disable-line no-underscore-dangle

const reportingMiddleware = configureReporting({
	appVersion: initialState.config.appVersion,
	sentryUrl: initialState.config.sentryUrl,
	unhandledRejection(fn) {
		return window.addEventListener('unhandledrejection', fn);
	},
});

const store = configureStore({
	initialState,
	platformDeps: {
		createStorageEngine,
		uuid,
	},
	platformMiddleware: [reportingMiddleware],
});

// Find the root element for the whole application.
const appElement = document.getElementById('app');

// Initial render.
ReactDOM.render(<Root store={store} />, appElement);

// Hot reload re-render.
// gist.github.com/gaearon/06bd9e2223556cb0d841#file-naive-js
if (module.hot && (typeof module.hot.accept === 'function')) {
	module.hot.accept('./app/Root', () => {
		const NextRoot = require('./app/Root').default;
		ReactDOM.render(<NextRoot store={store} />, appElement);
	});
}
