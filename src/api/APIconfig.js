import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://soyummy-backend-kmc6.onrender.com/api',
});

instance.interceptors.response.use(
  response => response,
  async error => {
    if (error.response.status === 401) {
      try {
        const refreshToken = localStorage.getItem('refreshToken1');
        const { data } = await instance.post('/auth/refresh', {
          refreshToken,
        });
        error.config.headers.Authorization = `Bearer ${data.accessToken}`;
        instance.defaults.headers.common.Authorization = `Bearer ${data.accessToken}`;
        localStorage.setItem('refreshToken1', data.refreshToken);
        localStorage.setItem('accessToken1', data.accessToken);

        return instance(error.config);
      } catch (error) {
        return Promise.reject(error);
      }
    } else if (error.response.status === 403) {
      localStorage.setItem('refreshToken1', '');
      localStorage.setItem('accessToken1', '');
      instance.defaults.headers.common.Authorization = '';
      window.location.replace('https://tsylepa.github.io/Yummy/signin');
    }

    return Promise.reject(error);
  }
);
