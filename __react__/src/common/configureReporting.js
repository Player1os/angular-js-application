/* @flow weak */

// Load npm modules.
import Raven from 'raven-js';

/*
TODO: NOT USED.
const setRavenUserContext = (user) => {
	if (!user) {
		Raven.setUserContext();
		return;
	}

	Raven.setUserContext({
		email: user.email,
		id: user.id,
	});
};
*/

const reportingMiddleware = () => {
	return (next) => {
		return (action) => {
			/**
			 * @ TODO Need to fix w/o firebase
			 * if (action.type === firebaseActions.FIREBASE_ON_AUTH) {	setRavenUserContext(action.payload.user); }
			 */

			// TODO: Use Raven.setExtraContext for last 10 actions and limited app state.
			return next(action);
		};
	};
};

const configureReporting = (options) => {
	const {
		appVersion,
		sentryUrl,
		unhandledRejection,
	} = options;

	Raven.config(sentryUrl, {
		// gist.github.com/impressiver/5092952
		/*
			TODO: Only include what is necessary
		ignoreErrors: [
			'top.GLOBALS',
			'originalCreateNotification',
			'canvas.contentDocument',
			'MyApp_RemoveAllHighlights',
			'http://tt.epicplay.com',
			'Can\'t find variable: ZiteReader',
			'jigsaw is not defined',
			'ComboSearch is not defined',
			'http://loading.retry.widdit.com/',
			'atomicFindClose',
			'fb_xd_fragment',
			'bmi_SafeAddOnload',
			'EBCallBackMessageReceived',
			'conduitPage',
		],
		ignoreUrls: [
			// Facebook flakiness
			/graph\.facebook\.com/i,
			// Facebook blocked
			/connect\.facebook\.net\/en_US\/all\.js/i,
			// Woopra flakiness
			/eatdifferent\.com\.woopra-ns\.com/i,
			/static\.woopra\.com\/js\/woopra\.js/i,
			// Chrome extensions
			/extensions\//i,
			/^chrome:\/\//i,
			// Other plugins
			/127\.0\.0\.1:4001\/isrunning/i,	// Cacaoweb
			/webappstoolbarba\.texthelp\.com\//i,
			/metrics\.itunes\.apple\.com\.edgesuite\.net\//i,
		],
		*/
		release: appVersion,
		// TODO: serverName: device.uuid
		// TODO: Add list of common ignore rules from
		// docs.getsentry.com/hosted/clients/javascript/tips/#decluttering-sentry
	}).install();

	// bluebirdjs.com/docs/api/error-management-configuration.html
	unhandledRejection((event) => {
		event.preventDefault();

		const err = event.detail.reason;

		if (process.env.NODE_ENV === 'production') {
			Raven.captureException(err);
			// We can use also Raven.lastEventId() and Raven.showReportDialog().
			// Check docs.getsentry.com/hosted/clients/javascript/usage
		} else {
			/* eslint-disable no-console */
			console.warn('Unhandled promise rejection. Fix it or it will be reported.');
			console.warn(err);
			/* eslint-enable no-console */
		}
	});

	return reportingMiddleware;
};

export default configureReporting;
