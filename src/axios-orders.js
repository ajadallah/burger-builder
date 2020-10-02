import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-builder-37624.firebaseio.com/',
});

export default instance;
