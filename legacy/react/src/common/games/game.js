/* @flow */
import { Record } from '../transit';

const Game = Record({
	id: null,
	"_id": null,
	name: null,
	token: null,
	user_id: null,
	user_email: null,
	destination_url: null, // This line and below maybe squash into one
	destination_urls: null,
	infinario_project_token: null, // Abstract this for multiplatforms?
	summary: {
		"campaigns": null,
		"clicks": null,
		"installations": null,
		"conversions": null
	}
}, 'game');

export default Game;
