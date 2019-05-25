/* @flow */

// Load app modules.
import {
	StatisticsCard,
	Onboarding,
} from '../app/components';
import GamesCampaignsPage from './GamesCampaignsPage';
import GamesPostbacksPage from './GamesPostbacksPage';
import {
	openModalCreateCategory,
	openModalCreatePostback,
} from '../../common/modal/actions';

import {
	fetchCampaignsByGameToken,
} from '../../common/campaigns/actions';

// Load npm modules.
import React from 'react';
import {
	Match,
	browserHistory,
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

const tooltip = (
	<Tooltip id="tooltip">
		<strong>Holy guacamole!</strong>
		Check this info.
	</Tooltip>
);

class GamesDetailPage extends React.Component {
	constructor(props) {
		super(props);
	}

	static propTypes = {
		auth: React.PropTypes.object,
		selectedTab: React.PropTypes.number,
		pathname: React.PropTypes.string.isRequired,
		viewer: React.PropTypes.object,
		games: React.PropTypes.object,
		fetchCampaignsByGameToken: React.PropTypes.func
	};

	componentDidMount(){
		this.props.dispatch(this.props.fetchCampaignsByGameToken(this.props.params.game_token));
	}


	render() {
		const {
			pathname,
			viewer,
			games,
			params,
			openModalCreateCategory,
		} = this.props;

		let CardCampaigns = {
			caption: "Campaigns",
			card_value: 321,
		};

		return (
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<Breadcrumb>
							<BreadcrumbItem href="">
								Games
							</BreadcrumbItem>
							<BreadcrumbItem active>
								Space engineers
							</BreadcrumbItem>
						</Breadcrumb>
					</div>
				</div>
				<div className="row row__mb--35">
					<div className="col-lg-12">
						<div className="card">
							<div className="card__body">
								<Onboarding />
							</div>
						</div>
					</div>
				</div>
				<div className="row row__mb--35">
					<div className="col-lg-12">
						<div className="card">
							<div className="card__body">
								<div className="row">
									<div className="col-lg-9">
										<h2 style={{
												display: 'inline-block',
												verticalAlign: 'middle'
											}}
											className="page__header-title">Space Engineers</h2>
									</div>
									<div className="col-lg-3 text-right">
										<strong>Integration status</strong>
										<br/>
										<br/>
										<br/>
										<br/>
										<Label bsStyle="success">Verified</Label>&nbsp;
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row row__mb--35">
					<div className="col-lg-3">
						<StatisticsCard caption={"Campaigns"} card_value={123}/>
					</div>
					<div className="col-lg-3">
						<StatisticsCard caption={"Clicks"} card_value={123}/>
					</div>
					<div className="col-lg-3">
						<StatisticsCard caption={"Installations"} card_value={123}/>
					</div>
					<div className="col-lg-3">
						<StatisticsCard caption={"Conversions"} card_value={123}/>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12">
						<Tabs defaultActiveKey={1} >
							<Tab eventKey={1} title="Campaigns">
								<GamesCampaignsPage openModalCreateCategory={openModalCreateCategory} />
							</Tab>
							<Tab eventKey={2} title="Postbacks">
								<GamesPostbacksPage openModalCreatePostback={openModalCreatePostback} />
							</Tab>
						</Tabs>
					</div>
				</div>
			</div>
		);
	}
}

export default connect(state => ({
	auth: state.auth,
	games: state.games,
	viewer: state.users.viewer,
	campaigns: state.campaigns,
	modalTypes: state.modal.modalTypes
}, {
	fetchCampaignsByGameToken,
	openModalCreateCategory,
	openModalCreatePostback
}))(GamesDetailPage);
