/* eslint-disable import/no-extraneous-dependencies */
const BundleAnalayzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new BundleAnalayzer(),
    new CopyWebpackPlugin({
      patterns: [{ from: 'assets', to: 'dest' }],
    }),
  ],
};
