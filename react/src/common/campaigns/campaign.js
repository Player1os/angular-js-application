/* @flow */
import { Record } from '../transit';

const Campaign = Record({
	game_id: null,
	game_token: null,
	token: null,
	name: null,
	price: null,
	destination_url: null
}, 'campaign');

export default Campaign;
