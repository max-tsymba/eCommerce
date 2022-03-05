/* eslint-disable operator-linebreak */
/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/index.tsx'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  devServer: {
    port: 4000,
    historyApiFallback: true,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/,
        type: 'asset/inline',
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
};
