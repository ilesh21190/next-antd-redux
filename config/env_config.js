const env = process.env.ENV || 'development';

const configs = {
  development: {
    authApi: 'http://localhost:8081',
    api: 'http://localhost:8083',
  },
  staging: {
    api: 'https://api.staging.com',
  },
  production: {
    api: 'https://api.production.com',
  },
}[env];

export default configs;