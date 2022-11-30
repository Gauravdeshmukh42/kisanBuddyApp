// import axios from 'axios';
// import authService from '../services/auth.service';
// import history from './history';

import axios from 'axios';

const baseURL = process.env.API_URL || 'http://139.59.75.132:3008/';
// const currentURL = window.location.href;
// console.log(currentURL, 'currentURL');
let headers = {};

if (localStorage.getItem('token')) {
	headers = { Authorization: `Bearer ${localStorage.getItem('token')}` };
}

const axiosInstance = axios.create({ baseURL, headers });
let currentURI = '';

// add token
axiosInstance.interceptors.request.use(
	(config) => {
		currentURI = axiosInstance.getUri(config);

		if (localStorage.getItem('token') && !currentURI.includes('login')) {
			config.headers = {
				Authorization: `Bearer ${localStorage.getItem('token')}`,
			};
		}
		return config;
	},
	(error) => Promise.reject(error),
);

// handle 401
axiosInstance.interceptors.response.use(
	(response) => response,
	(error) => {
		console.log('Axios Error', error);
		if (error?.response?.status > 399 && error?.response?.status < 500) {
			// place your reentry code
			authService.logout();
			// history.push('/login');
			localStorage.setItem('isAuthenticated', false);
			// window.location.reload(true);
		}
		return Promise.reject(error);
	},
);

export default axiosInstance;
