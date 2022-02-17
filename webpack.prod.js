const BundleAnalayzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [new BundleAnalayzerPlugin()],
};
