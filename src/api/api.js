import axios from 'axios';

export default client = axios.create({
  baseURL: 'https://api.github.com',
  responseType: 'json'
});
