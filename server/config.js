const path = require('path');

const rootPath = path.normalize(`${__dirname}/..`);

const app = {
  rootPath,
  publicPath:`${rootPath}/dist`,
  devPath: `${rootPath}/src`
};

const server = {
  development: {
    port: process.env.PORT || 4444,
    ip: '0.0.0.0'
  },
  production: {
    port: process.env.PORT || 4445,
    ip: '0.0.0.0'
  }
};

module.exports = {
  server,
  app
};
