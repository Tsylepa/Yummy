import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://soyummy-backend-kmc6.onrender.com/api/',
});
