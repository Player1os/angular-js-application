/* @flow */
/* eslint-disable react/require-extension */
// Bootstrap environment

const locales = [
	'cs', 'de', 'en', 'es', 'fr', 'pt', 'ro',
];

const onWindowIntl = () => {
	// Load the babel polyfill.
	require('babel-polyfill');

	// Configue bluebird as the default promise.
	window.Promise = require('../common/configureBluebird');

	// App locales are defined in src/server/config.js
	const {
		addLocaleData,
	} = require('react-intl');
	// TODO: Refactor.
	/*
	locales.forEach((locale) => {
		return addLocaleData(require(`react-intl/locale-data/${locale}`));
	});
	*/
	const localeDataItems = [
		require('react-intl/locale-data/cs'),
		require('react-intl/locale-data/de'),
		require('react-intl/locale-data/en'),
		require('react-intl/locale-data/es'),
		require('react-intl/locale-data/fr'),
		require('react-intl/locale-data/pt'),
		require('react-intl/locale-data/ro')
	].forEach((localeDataItem) => {
		return addLocaleData(localeDataItem);
	});

	require('./main');
};

// github.com/andyearnshaw/Intl.js/#intljs-and-browserifywebpack
if (!window.Intl) {
	// TODO: Refactor.
	/*
	const intlModules = ['intl'].concat(locales.map((locale) => {
		return `intl/locale-data/jsonp/${locale}.js`;
	}));
	*/
	require.ensure([
		'intl/locale-data/jsonp/cs.js',
		'intl/locale-data/jsonp/de.js',
		'intl/locale-data/jsonp/en.js',
		'intl/locale-data/jsonp/es.js',
		'intl/locale-data/jsonp/fr.js',
		'intl/locale-data/jsonp/pt.js',
		'intl/locale-data/jsonp/ro.js'
	], (require) => {
		require('intl/locale-data/jsonp/cs.js');
		require('intl/locale-data/jsonp/de.js');
		require('intl/locale-data/jsonp/en.js');
		require('intl/locale-data/jsonp/es.js');
		require('intl/locale-data/jsonp/fr.js');
		require('intl/locale-data/jsonp/pt.js');
		require('intl/locale-data/jsonp/ro.js');

		onWindowIntl();
	});
} else {
	onWindowIntl();
}
