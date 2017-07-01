/* @flow */

// Load app modules.
import {
	fields
} from '../../../../../../common/lib/redux-fields';
import {
	setField,
	resetFields,
} from '../../../../../../common/lib/redux-fields/actions';
import {
	focusInvalidField
} from '../../../../../../common/lib/validation/';

// Load npm modules.
import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
	connect,
} from 'react-redux';
import FontAwesome from 'react-fontawesome';

class CreateNewCategoryModal extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillUpdate(props) {
		const formError = props.formError;
		if (formError && formError != null) {
			focusInvalidField(this, formError)
		}
	}

	componentWillUnmount() {
		const { resetFields } = this.props;
		resetFields(['invite_users']);
	}

	render() {
		const {
			hidePopup,
			fields,
			formError,
		} = this.props;

		const errors = formError;

		return (
			<ReactCSSTransitionGroup transitionName="popup" transitionAppear={true} transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={300}>
				<div id="modalCreateNewGame" className="Modal">
						<FontAwesome name="times" className="Modal__control-hide" onClick={hidePopup} />
						<div className="Modal__head">
							<h3 className="Modal__head-title">Add new category</h3>
						</div>
						<div className="Modal__body">
							<div className="form-group">
								<label htmlFor="exampleInputEmail1">Name</label>
								<p>This is the name Tributit will use for your new campaign</p>
								<input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter a unique name for the campaign" />
							</div>
							{/*
								<div className="form-group">
									<label htmlFor="exampleInputPassword1">Link</label>
									<p>This is how the campaign link will look like</p>
									<input type="password" className="form-control" id="exampleInputPassword1" placeholder="The value will be entered automatically as you type in the name" />
								</div>
							*/}
							<div className="form-group">
								<label htmlFor="exampleInputPassword1">Price</label>
								<p>(Optional) The total cost of the campaign. You can later compare this with the campaign's revenues</p>
								<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter the costs of the campaign"/>
							</div>
							<div className="form-group">
								<label htmlFor="exampleInputPassword1">Destination URL</label>
								<p>You may enter a campaign specific destination url, otherwise just leave this field unchanged</p>
								<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter the destination url where users will be redirected after using the campaign link" />
							</div>
						</div>
						<div className="Modal__footer">
							<div className="row">
								<div className="col-lg-12">
									<input type="submit" className="btn btn-primary" value="Create category"/>
								</div>
							</div>
						</div>
				</div>
			</ReactCSSTransitionGroup>
		);
	}
}

CreateNewCategoryModal = fields(CreateNewCategoryModal, {
	path: 'invite_users',
	fields: ['email', 'message', 'wallet_id']
});

export default connect((state, ownProps) => {
	return {
		formError: state.users.formError,
		formDisabled: state.users.formDisabled
	};
},{
	setField,
	resetFields,
})(CreateNewCategoryModal);
