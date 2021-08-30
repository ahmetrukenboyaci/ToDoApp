import axios from 'axios';
import * as types from './methodTypes';

const BASE_URL = 'http://localhost:5000/api';

export function request(url, methodType, data) {
	const wholeURL = BASE_URL + url;

	switch (methodType) {
	case types.DELETE:
		return axios.delete(wholeURL)
			.then(function (response) {
				return response.data;
			})
			.catch(function (error) {
				return error;
			});
	case types.GET:
		return axios.get(wholeURL)
			.then(function (response) {
				return response.data;
			})
			.catch(function (error) {
				return error;
			});
	case types.POST:
		return axios.post(wholeURL, data)
			.then(function (response) {
				return response.data;
			})
			.catch(function (error) {
				return error;
			});
	case types.PUT:
		return axios.put(wholeURL, data)
			.then(function (response) {
				return response.data;
			})
			.catch(function (error) {
				return error;
			});
	}
}