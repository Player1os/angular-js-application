/* @flow */

// Load app modules.
import Navigation from '../app/Navigation';

// Load npm modules.
import React from 'react';
import {
	Match,
} from 'react-router';
import {
	connect,
} from 'react-redux';

import {
	Breadcrumb,
	BreadcrumbItem,
} from 'react-bootstrap';

const UserPage = ({ pathname, viewer }) => (
	<div>
		<Navigation />
		<Match exactly pattern={pathname} render={() => (
				<div>
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<Breadcrumb>
									<BreadcrumbItem href=""> User </BreadcrumbItem>
									<BreadcrumbItem active> Settings </BreadcrumbItem>
								</Breadcrumb>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-12">
								<h2>Account settings</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-12">
								<div className="card">
									<div className="card__body">
										<div className="row">
											<div className="col-lg-12">
												<h3>General settings</h3>
											</div>
										</div>
										<div className="row">
											<div className="col-lg-12">
												<h3>Account info</h3>
											</div>
										</div>
										<div className="row">
											<div className="col-lg-12">
												<h3>Change password</h3>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		/>
	</div>
);

UserPage.propTypes = {
	pathname: React.PropTypes.string.isRequired,
	viewer: React.PropTypes.object,
};

export default connect((state) => {
	return {
		viewer: state.users.viewer
	};
})(UserPage);
