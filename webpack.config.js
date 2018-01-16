const webpack = require('webpack');
const LiveReloadPlugin = require('webpack-livereload-plugin');

const isDev = process.env.NODE_ENV === 'development';

const { resolve } = require('path');

module.exports = {
  entry: './client/index.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js',
  },
  context: __dirname,
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /jsx?$/,
        include: resolve(__dirname, './client'),
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
        },
      },
    ],
  },
  plugins: isDev ? [new LiveReloadPlugin({ appendScriptTag: true })] : [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.optimize.UglifyJsPlugin(),
  ],
};
