/* @flow weak */

// Load app modules.
import {
	SUCCESS,
} from '../constants/http';
import ValidationError from '../lib/validation/ValidationError';
import {
	USER_REGISTER,
	USER_LOGIN,
} from '../apiConstants';

// Load npm modules.
import axios from 'axios';
import {
	browserHistory,
} from 'react-router';
import UUID from 'uuid';

export const SIGN_OUT = 'SIGN_OUT';

export const SET_ACCESS_TOKEN = 'SET_ACCESS_TOKEN';

export const LOGIN = 'LOGIN';
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_PENDING = 'LOGIN_PENDING';
export const LOGIN_FULFILLED = 'LOGIN_FULFILLED';
export const LOGIN_REJECTED = 'LOGIN_REJECTED';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
export const CHANGE_PASSWORD_ERROR = 'CHANGE_PASSWORD_ERROR';

export const REGISTER = 'REGISTER';
export const REGISTER_START = 'REGISTER_START';
export const REGISTER_ERROR = 'REGISTER_ERROR';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const FORGOT_PASSWORD = 'FORGOT_PASSWORD';

export const FORGOT_PASSWORD_ERROR = 'FORGOT_PASSWORD_ERROR';
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';

export const LOGOUT_USER = 'LOGOUT_USER';
export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS';

export const VALIDATE_LOGIN = 'VALIDATE_LOGIN';
export const VALIDATE_LOGIN_ERROR = 'VALIDATE_LOGIN_ERROR';

export function setToken(accessToken) {
	return {
		type: SET_ACCESS_TOKEN,
		payload: {
			accessToken
		}
	};
}

function requestRegisterData() {
	return {
		type: REGISTER_START
	}
}

function recieveRegisterData(json) {
	return {
		type: REGISTER_SUCCESS,
		payload: json
	}
}

function recieveRegisterError(json) {
	return {
		type: REGISTER_ERROR,
		payload: json
	}
}

function requestLoginData() {
	return {
		type: LOGIN_START
	}
}

function recieveLoginData(json) {
	return {
		type: LOGIN_SUCCESS,
		payload: json
	}
}

function recieveLoginError(json) {
	return {
		type: LOGIN_ERROR,
		payload: json
	}
}

export function register(fields) {
	const getPromise = async () => {
		const response = await axios({
			requestId: "userLogin",
			url: USER_REGISTER,
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			data: {
				email: fields.email,
				password_hash: fields.password
			},
			responseType: 'json'
		});

		return response;
	};

	return {
		type: REGISTER,
		payload: getPromise()
	};
}

export function login(fields) {
	return {
		types: ['LOGIN_REQUEST','LOGIN_SUCCESS','LOGIN_FAILURE'],
		payload: {
			request: {
				url: USER_LOGIN,
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				data: {
					email: fields.email,
					password_hash: fields.password,
				},
			},
		},
	};
}
