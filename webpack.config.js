/* eslint-disable import/no-dynamic-require */
/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = (envVar) => {
  const { env } = envVar;
  const envConfig = require(`./webpack.${env}.js`);

  return merge(commonConfig, envConfig);
};
