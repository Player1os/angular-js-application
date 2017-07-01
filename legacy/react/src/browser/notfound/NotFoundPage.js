/* @flow */

// Load app modules.
import {
	Link,
	PageHeader,
	Title,
	View,
} from '../app/components';

// Load npm modules.
import React from 'react';
import {
	injectIntl,
	intlShape,
} from 'react-intl';

const NotFoundPage = ({ intl }) => (
	<div className="container--form">
		<div className="container text-center">
			<div className="row">
				<div className="col-lg-12">
					<img src="http://4vector.com/i/free-vector-panda-clip-art_107315_Panda_clip_art_hight.png" height="150"/>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-12">
					<h1>404 - page not found</h1>
				</div>
				<div className="col-lg-12">
					<h3>I didn't eat it. I swear!</h3>
				</div>
			</div>
			<div className="row" style={ {marginTop: '20px'} }>
				<div className="col-lg-12">
					<a className="btn btn-primary" href="/app/games">Take me back to the homepage</a>
				</div>
			</div>
		</div>
	</div>
);

NotFoundPage.propTypes = {
	intl: intlShape.isRequired,
};

export default injectIntl(NotFoundPage);
