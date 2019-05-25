/* @flow weak */
import * as actions from './actions';
import User from './user';
import { Record } from '../transit';
import { Seq } from 'immutable';


import * as authActions from '../auth/actions';

import {
  SUCCESS,
  ERROR
} from '../constants/http';

const State = Record({
	// Undefined is absence of evidence. Null is evidence of absence.
	viewer: undefined,
	formError: null,
	formDisabled: false
}, 'users');

const usersReducer = (state = new State(), action) => {
	switch (action.type) {

		case authActions.LOGIN_SUCCESS:
		{

			console.log("USER ACTION", action);

			let user = null;

			if (action.payload.data.success === true) {
				user = new User(action.payload.data.data);
				state = state.set('viewer', user);
			}

			return state;
		}

		case authActions.LOGOUT_USER_SUCCESS:
		{
			return state.merge({ 'viewer': null });
		}




		default:
			return state;

	}
};

export default usersReducer;
