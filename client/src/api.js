import axios from 'axios';

const api = axios.create({
  baseURL: 'http://procure-app-latest.onrender.com/api',
});

export default api;
