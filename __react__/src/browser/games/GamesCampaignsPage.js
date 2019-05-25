/* @flow */

// Load app modules.
import {
	StatisticsCard,
	Onboarding,
} from '../app/components';

import GamesPostbacksPage from './GamesPostbacksPage';
import {
	openModalCreateCategory,
} from '../../common/modal/actions';

// Load npm modules.
import FontAwesome from 'react-fontawesome';
import React from 'react';
import {
	Match,
} from 'react-router';
import {
	connect,
} from 'react-redux';
import {
	Button,
	Breadcrumb,
	BreadcrumbItem,
	Tabs,
	Tab,
	Nav,
	Label,
	NavDropdown,
	NavItem,
	MenuItem,
	Table,
	Tooltip,
	OverlayTrigger,
} from 'react-bootstrap';

const tooltip = (
	<Tooltip id="tooltip">
		<strong>Holy guacamole!</strong>
		Check this info.
	</Tooltip>
);

class GamesCampaignsPage extends React.Component {
	constructor(props) {
		super(props);
		this.openCategoryPopup = this.openCategoryPopup.bind(this);
	}

	static propTypes = {
		pathname: React.PropTypes.string.isRequired,
		viewer: React.PropTypes.object,
		games: React.PropTypes.object,
		openModalCreateCategory: React.PropTypes.func
	};

	openCategoryPopup(gameId) {
		const { openModalCreateCategory } = this.props;
		console.log(gameId);
		openModalCreateCategory();
	}

	render() {
		const { pathname, viewer, games, params } = this.props;
		return (
			<div className="nav-content">
				<div className="nav-content__body">
					<div className="row row__mb--35">
						<div className="col-lg-12">
							<Button bsStyle="primary" onClick={this.openCategoryPopup.bind(this, 1)}>
								<span className="glyphicon glyphicon-plus"></span>
								Create new Campaign
							</Button>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<Table striped bordered hover>
								<thead>
									<tr>
										<th>Name</th>
										<th>Description</th>
										<th>Success rate</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											<a href="">Europe</a>
										</td>
										<td>Quick Promocodes</td>
										<td>
											<strong>0.0%</strong>
										</td>
									</tr>
									<tr>
										<td>
											<a href="">Asia</a>
										</td>
										<td>Promocodes</td>
										<td>
											<strong>32.0%</strong>
										</td>
									</tr>
									<tr>
										<td>
											<a href="">Steam summer sales</a>
										</td>
										<td>Summer steam promo</td>
										<td>
											<strong>55.0%</strong>
										</td>
									</tr>
								</tbody>
							</Table>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12 text-right">
							<a className="btn btn-link" href="">Show archived campaigns</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default connect((state) => {
	return {
		games: state.games,
		viewer: state.users.viewer
	};
}, {openModalCreateCategory})(GamesCampaignsPage);
