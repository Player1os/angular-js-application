/* @flow weak */

// Load app modules.
import * as actions from './actions';
import {
	ERROR,
} from '../constants/http';
import Errors from '../lib/validation/Errors';
import * as fieldsActions from '../lib/redux-fields/actions';
import {
	Record,
} from '../transit';
import * as userActions from '../users/actions';
import ValidationError from '../lib/validation/ValidationError';

const State = Record({
	accessToken: null,
	formDisabled: false,
	formError: null,
	error: null,
	success: null, // To get accessToken, refreshToken, whatever.
}, 'auth');

const authReducer = (state = new State(), action) => {
	switch (action.type) {
		case actions.LOGIN_REQUEST:
		{
			return state.set('formDisabled', true);
		}
		case actions.LOGIN_SUCCESS:
		{
			const response = action.payload;

			return state.merge({
				accessToken: response.data.data.user_token,
				formDisabled: false,
				formError: null,
				success: response.success,
			});
		}
		case actions.REGISTER_START:
		{
			return state.set('formDisabled', true);
		}
		case actions.REGISTER_SUCCESS:
		{
			const response = action.payload;

			return state.merge({
				accessToken: response.data.user_token,
				formDisabled: false,
				formError: null,
				success: response.success,
			});
		}
		case actions.LOGOUT_USER:
		{
			return state.merge('accessToken', null);
		}
		case actions.VALIDATE_LOGIN_ERROR:
		case actions.LOGIN_FAILURE:
		case actions.REGISTER_ERROR:
		{
			const response = action.payload;
			return state.merge({
				formDisabled: false,
				formError: response
			});
		}
		default:
		{
			return state;
		}
	}
};

export default authReducer;
