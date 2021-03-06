import axios from 'axios';

const baseURL = 'https://www.omdbapi.com/';
const apiKey = '157f34ed';

const http = axios.create({
  baseURL,
})

http.interceptors.request.use(config => {
  config.params = {
    apikey: apiKey,
    type: ['movie', 'series', 'episode'],
    ...config.params,
  };
  return config;
});


export {http}