import axios from 'axios';

export const API = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL || 'https://api.rekeningku.com/v2',
});
