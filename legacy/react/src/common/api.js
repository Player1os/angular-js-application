import axiosDefaults from 'axios/lib/defaults'
import axios from 'axios';


export const MODE_CORS = 'cors';
export const API_URL = '/';

axiosDefaults = {
	baseURL: API_URL,
	mode: MODE_CORS,
	headers: {
		'Content-Type': 'application/json',
	}
}

export default axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:3004/',
});
