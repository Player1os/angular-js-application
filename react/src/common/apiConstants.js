const endpointPaths = {
	auth: '/auth',
	data: '/data',
	api: '/api',
};

// Endpoints for authentication tasks.
export const auth = {
	login: `${endpointPaths.auth}/auth/login`,
	register: `${endpointPaths.auth}/auth/register`,
};

// Endpoints for the standardized model rest api.
export const api = {
	user: `${endpointPaths.api}/user`,
	game: `${endpointPaths.api}/game`,
	campaign: `${endpointPaths.api}/campaign`,
	postback: `${endpointPaths.api}/postback`,
};

// Data endpoints for the user model.
export const user = {
	self: `${endpointPaths.data}/user/self`
};

// Data endpoints for the game model.
export const game = {
	getAll: `${endpointPaths.data}/game`,
};

// Data endpoints for the campaign model.
export const campaign = {
	getAll: `${endpointPaths.data}/campaign`,
};

// Data endpoints for the postback model.
export const postback = {
	getAll: `${endpointPaths.data}/postback`,
};

// Legacy exports.
export const USER_LOGIN = `${endpointPaths.auth}/auth/login`;
export const USER_REGISTER = `${endpointPaths.auth}/auth/register`;

export const USER_GET_PROFILE = `${endpointPaths.data}/user/self`;

export const GAMES_GET = `${endpointPaths.data}/game`;
export const GAMES_GET_ALL = `${endpointPaths.data}/game`;
export const GAMES_CREATE = `${endpointPaths.api}/game`;

export const CAMPAIGNS_GET = `${endpointPaths.data}/campaign`;
export const CAMPAIGNS_GET_ALL = `${endpointPaths.data}/campaign`;
export const CAMPAIGNS_CREATE = `${endpointPaths.api}/campaign`;
