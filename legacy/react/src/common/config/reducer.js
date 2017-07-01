/* @flow weak */
import { Record } from '../transit';

const State = Record({
  appName: 'Tributit',
  appVersion: '1.0.0',
  sentryUrl: '',
}, 'config');

const configReducer = (state = new State()) => state;

export default configReducer;
