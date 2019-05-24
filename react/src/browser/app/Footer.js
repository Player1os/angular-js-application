/* @flow */

// Load app modules.
import {
	Footer,
	Link
} from '../app/components';

// Load npm modules.
import React from 'react';
import {
	FormattedMessage,
	defineMessages
} from 'react-intl';

const messages = defineMessages({
	madeByHtml: {
		defaultMessage: 'Made with love by',
		id: 'footer.madeByHtml',
	},
});

const AppFooter = () => (
	<footer>
		&copy; Jakub K
	</footer>
);

export default AppFooter;
