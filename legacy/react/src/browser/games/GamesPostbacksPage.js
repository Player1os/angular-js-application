/* @flow */

// Load app modules.
import {
	StatisticsCard,
	Onboarding,
} from '../app/components';
import {
	openModalCreatePostback,
} from '../../common/modal/actions';

// Load npm modules.
import React from 'react';
import {
	Match,
} from 'react-router';
import {
	connect,
} from 'react-redux';
import {
	Table,
	Tooltip,
	OverlayTrigger,
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
} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import Switch from 'rc-switch';

const tooltip = (
	<Tooltip id="tooltip">
		<strong>Holy guacamole!</strong>
		Check this info.
	</Tooltip>
);

class GamesPostbacksPage extends React.Component {
	constructor(props) {
		super(props);
		this.openPostbackPopup = this.openPostbackPopup.bind(this);
	}

	static propTypes = {
		pathname: React.PropTypes.string.isRequired,
		viewer: React.PropTypes.object,
		games: React.PropTypes.object,
		openModalCreatePostback: React.PropTypes.func
	};

	openPostbackPopup(gameId) {
		const { openModalCreatePostback } = this.props;
		console.log(gameId);
		openModalCreatePostback();
	}

	render() {
		const { pathname, viewer, games } = this.props;
		return (
			<div className="nav-content">
				<div className="nav-content__body">
					<div className="row row__mb--35">
						<div className="col-lg-12">
							<Button bsStyle="primary" onClick={this.openPostbackPopup.bind(this, 1)}>
								<span className="glyphicon glyphicon-plus"></span>
								Create new postback
							</Button>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<Table striped bordered hover>
								<thead>
									<tr>
										<th>Name</th>
										<th>Status</th>
										<th>Template ID</th>
										<th>Type</th>
										<th>Code</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											<a href="">Partner Google Analytics postback</a>
										</td>
										<td className="text-center">
											<Switch checkedChildren={'ON'} unCheckedChildren={'OFF'} />
										</td>
										<td>1337</td>
										<td>event</td>
										<td>http://something.url.tdl/?params..</td>
									</tr>
								</tbody>
							</Table>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12 text-right">
							<a className="btn btn-link" href="">Show archived postbacks</a>
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
}, {openModalCreatePostback})(GamesPostbacksPage);
