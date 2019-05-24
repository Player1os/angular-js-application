/* @flow */

// Load app modules.
import {
	fields,
} from '../../common/lib/redux-fields';
import {
	login,
} from '../../common/auth/actions';
import {
	SUCCESS,
} from '../../common/constants/http';
import {
	setField,
} from '../../common/lib/redux-fields/actions';
import {
	fetchAllDataAfterLogin,
} from '../../common/app/actions';

// Load npm modules.
import React from 'react';
import {
	Match,
	locationShape,
	browserHistory,
	Link,
	Redirect
} from 'react-router';
import {
	connect
} from 'react-redux';
import {
	Form,
	FormGroup,
	Button,
	FormControl
} from 'react-bootstrap';

class AuthSignInPage extends React.Component {
	static propTypes = {
		pathname: React.PropTypes.string.isRequired,
		viewer: React.PropTypes.object,
		auth: React.PropTypes.object.isRequired,
		fields: React.PropTypes.object.isRequired,
		login: React.PropTypes.func.isRequired,
		location: React.PropTypes.object.isRequired,
	};

	static contextTypes = {
		router: React.PropTypes.object.isRequired,
	};

	constructor(props) {
		super(props);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	componentDidUpdate(prevProps, prevState) {
		/*
		console.log('prev props', prevProps);
		console.log('prev state', prevState);

		if (prevProps.auth.accessToken !== null) {
			const nextPathname = '/app/games';
			window.location.href = nextPathname;
		}
		*/
	}

	async onFormSubmit(e) {
		e.preventDefault();

		const {
			login,
			fields,
			auth,
			fetchAllDataAfterLogin,
			resetFields,
		} = this.props;


		await login(fields.$values())
			.then((response) => {
				const nextPathname = '/app/games';
				window.location.href = nextPathname;
				resetFields(['auth']);
			})
			.catch((response) => {
				//handle form errors
			});
	}

	/*
	response.then(response => () => {
		console.log("response await login", response); // why undefined OMG?!
		resetFields(['auth']);
		const nextPathname = '/app/games';
		window.location.href = nextPathname;
	});
	*/

	render() {
		const {
			pathname,
			auth,
			fields,
			viewer,
		} = this.props;

		console.log(auth);

		return (
			viewer
			?
			<Redirect to={
				(
					location.state
					&& location.state.from
					&& location.state.from.pathname
				)
				|| '/app/games'}
			/>
			:
			<div className="container">
				<Form className="form-sign" disabled={auth.formDisabled}>
					<div className="row">
						<div className="col-lg-12">
							<h1 className="form-sign__headline">Tributit</h1>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<FormGroup>
								<label htmlFor="form-sign-in-email">E-mail address</label>
								<FormControl id="form-sign-in-email" {...fields.email} type="email" placeholder="Email" />
							</FormGroup>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<FormGroup>
								<label htmlFor="form-sign-in-password">Password</label>
								<FormControl id="form-sign-in-password" {...fields.password} type="password" placeholder="Your password" />
							</FormGroup>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<Button type="submit" onClick={this.onFormSubmit} className="btn btn-primary btn-block">Sign In</Button>
						</div>
					</div>
				</Form>
			</div>
		);
	}
}

AuthSignInPage = fields(AuthSignInPage, {
	path: 'auth',
	fields: ['email', 'password'],
});

export default connect((state) => {
	return {
		auth: state.auth,
		device: state.device,
		viewer: state.users.viewer,
		pathname: state.app.location && state.app.location.pathname,
	};
}, {
	login,
	fetchAllDataAfterLogin,
})(AuthSignInPage);
