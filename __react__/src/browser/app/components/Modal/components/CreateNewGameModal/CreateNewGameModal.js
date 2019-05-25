/* @flow */

// Load npm modules.
import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import {
	connect,
} from 'react-redux';

import FontAwesome from 'react-fontawesome';

// Load app modules.
import {
	fields
} from '../../../../../../common/lib/redux-fields';

import {
	setField,
	resetFields,
} from '../../../../../../common/lib/redux-fields/actions';

import {
	createGame,
} from '../../../../../../common/games/actions';

import {
	focusInvalidField,
} from '../../../../../../common/lib/validation/';


import {
	FormControl
} from 'react-bootstrap';

class CreateNewGameModal extends React.Component {
	constructor(props) {
		super(props);
		this.doCreateGame = this.doCreateGame.bind(this);
	}

	componentWillUpdate(props) {
		const formError = props.formError;
		if (formError && formError != null) {
			focusInvalidField(this, formError)
		}
	}

	componentWillUnmount() {
		const { resetFields } = this.props;
		resetFields(['create_game']);
	}

	doCreateGame() {

		const {
			fields,
			hideModal,
			formDisabled,
			createGameClick
		} = this.props;

		if (formDisabled) return;

		try {

			const response = createGameClick(fields.$values());

		} catch (error) {
			console.log(error);
		}
	}


	render() {
		const {
			hidePopup,
			fields,
			formError
		} = this.props;

		const errors = formError;

		return (
			<ReactCSSTransitionGroup transitionName="popup" transitionAppear={true} transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={300}>
				<div id="modalCreateNewGame" className="Modal popup">
					<FontAwesome name="times" className="Modal__control-hide" onClick={hidePopup} />
					<div className="Modal__head">
						<h3 className="Modal__head-title">Add new game</h3>
					</div>
					<div className="Modal__body">
						<div className="form-group">
							<label htmlFor="exampleInputEmail1">Name</label>
							<p>This is the name Tributit will use for your new game</p>
							<input className="form-control" id="form-sign-in-email" {... fields.game_name} type="text" placeholder="Enter unique name for the game" />
						</div>

						{/*
							<div className="form-group">
								<label htmlFor="exampleInputPassword1">Token</label>
								<p>You'll use this when sending events to Tributit for this game</p>
								<input type="password" className="form-control" id="exampleInputPassword1" placeholder="The value will be entered automatically as you type in the name" />
							</div>
						*/}
						<div className="form-group">
							<label htmlFor="destinationUrl">Destination URL</label>
							<p>This is the default destination url for this games' campaigns.</p>
							<input className="form-control" id="form-sign-in-email" {... fields.destination_url} type="text" placeholder="Enter the full url where users will be redirected after using the campaign link" />
						</div>

					</div>
					<div className="Modal__footer">
						<div className="row">
							<div className="col-lg-12">
								<button onClick={this.doCreateGame} className="btn btn-primary">Create game</button>
							</div>
						</div>
					</div>
				</div>
			</ReactCSSTransitionGroup>
		);
	}
}

CreateNewGameModal = fields(CreateNewGameModal, {
	path: 'create_game',
	fields: ['game_name', 'destination_url'],
});

export default connect(
  (state, ownProps) => ({
    formError: state.users.formError,
    formDisabled: state.users.formDisabled
  }), function(dispatch) {
    return {
		setField,
		resetFields,
		createGameClick : (values) => {
			dispatch(createGame(values))
		}
	}
  }
)(CreateNewGameModal);
