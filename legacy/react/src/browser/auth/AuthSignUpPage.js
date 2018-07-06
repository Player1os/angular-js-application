/* @flow */

// Load app modules.
import {
	fields,
} from '../../common/lib/redux-fields';
import {
	register,
} from '../../common/auth/actions';
import {
	SUCCESS,
} from '../../common/constants/http';
import {
	setField,
} from '../../common/lib/redux-fields/actions';

// Load npm modules.
import React from 'react';
import {
	browserHistory,
	locationShape,
	Link
} from 'react-router';
import {
	connect,
} from 'react-redux';
import {
	FormGroup,
	Button,
	FormControl
} from 'react-bootstrap';

class AuthSignUpPage extends React.Component {
	static propTypes = {
		auth: React.PropTypes.object.isRequired,
		fields: React.PropTypes.object.isRequired,
		pathname: React.PropTypes.string.isRequired,
		register: React.PropTypes.func.isRequired
	};

	constructor(props) {
		super(props);
	}

	async onFormSubmit(e) {
		e.preventDefault();

		const {
			auth,
			register,
			fields,
			pathname,
		} = this.props;

		if (auth.formDisabled) {
			return;
		}

		try {
			const response = await register(fields.$values());
			console.log("registracni response", response.json);

			this.redirectAfterRegistration();
		} catch (err) {
			console.log("ERROR", err);
		}
	}

	redirectAfterRegistration() {
		const nextPathname = '/app/games';
		window.location.href = nextPathname;
	}

	render() {
		const {
			auth,
			pathname,
			fields,
			users,
			setField,
			onFormSubmit,
			openAvatarEditorPopup,
		} = this.props;
		const viewer = users.viewer;
		const usersFormError = users.formError;

		return (
			<div className="container">
				<form className="form-sign" disabled={auth.formDisabled}>
					<div className="row">
						<div className="col-lg-12">
							<h1 className="form-sign__headline">Tributit</h1>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<FormGroup>
								<label htmlFor="form-sign-in-email">E-mail address</label>
								<FormControl {...fields.email} maxLength="300" id="email" type="email" placeholder="Email" />
							</FormGroup>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<FormGroup>
								<label htmlFor="form-sign-in-password">Password</label>
								<FormControl {...fields.password} maxLength="300" id="password" type="password" placeholder="Your password" />
							</FormGroup>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<FormGroup>
								<label htmlFor="form-sign-in-password">Confirm Password </label>
								<FormControl {...fields.passwordConfirm} maxLength="300" id="passwordConfirm" type="password" placeholder="Confirm your password" />
							</FormGroup>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<Button type="submit" onClick={(e) => this.onFormSubmit(e)} className="btn btn-primary btn-block">Create Account</Button>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

AuthSignUpPage = fields(AuthSignUpPage, {
	path: 'auth',
	fields: ['email', 'password', 'passwordConfirm'],
});

export default connect((state) => {
	return {
		auth: state.auth,
		viewer: state.users.viewer,
		users: state.users,
	};
}, {
	register,
	setField,
})(AuthSignUpPage);
