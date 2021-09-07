import Axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || `http://localhost:5000`;

const axios = Axios.create({
  baseURL: API_BASE_URL,
});

export default axios;
