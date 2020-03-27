import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-order-7b71e.firebaseio.com/',
});

export default instance;
