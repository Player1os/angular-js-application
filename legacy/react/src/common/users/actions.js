/* @flow */
export const ON_USERS_PRESENCE = 'ON_USERS_PRESENCE';

export const onUsersPresence = (snap: Object) => {
	const presence = snap.val();
	return {
		type: ON_USERS_PRESENCE,
		payload: { presence },
	};
};

import {
  USER_PROFILE,
  CONNECT_FACEBOOK_USER,
  USER_UPDATE,
  WALLET_INVITE_TO_SHARE,
  USER_UNSHARE_USER
} from '../apiConstants';

import { browserHistory } from 'react-router';

export const GET_USER_PROFILE = 'GET_USER_PROFILE';
export const GET_USER_PROFILE_SUCCESS = 'GET_USER_PROFILE_SUCCESS';
export const GET_USER_PROFILE_ERROR = 'GET_USER_PROFILE_ERROR';
export const GET_USER_PROFILE_START = 'GET_USER_PROFILE_START';

export const UPDATE_USER_PROFILE = 'UPDATE_USER_PROFILE';
export const UPDATE_USER_PROFILE_SUCCESS = 'UPDATE_USER_PROFILE_SUCCESS';
export const UPDATE_USER_PROFILE_ERROR = 'UPDATE_USER_PROFILE_ERROR';

export function getUserProfile() {
  return ({ getState }) => {
    const getPromise = async() => {
      try {
        const { accessToken } = getState().auth;
        const response = await fetch(USER_PROFILE, {
		method: 'GET',
		headers: {
			'x-access-token': accessToken,
			'Content-Type': 'application/json'
		},
		mode: 'cors', // Cross origin mode
		body: {}
        });
        if (response.status !== 200) {
          throw response;
        }
        return response.json();
      } catch (error) {
        if (process.env.IS_BROWSER) {
          browserHistory.replace('/login');
        }
        throw error;
      }
    };
    return {
      type: GET_USER_PROFILE,
      payload: getPromise()
    };
  };
}
