import configs from './env_config';
import axios from 'axios';

export default axios.create({
  baseURL: configs.api
});