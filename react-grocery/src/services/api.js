import axios from 'axios';
import { API_ENDPOINT } from '../settings';

const api = axios.create({
	baseURL: API_ENDPOINT
});

export default api;