import configs from './env_config';
import axios from 'axios';

const instance = axios.create({
  baseURL: configs.authApi,
});
instance.defaults.headers.common['Authorization'] = "Basic U2FtcGxlQ2xpZW50SWQ6c2VjcmV0";
instance.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';

export default instance;
