var path = require('path');
var webpack = require('webpack');
var node_modules_dir = path.resolve(__dirname, 'node_modules');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.js', '.css'],
    mainFields: [
      'webpack',
      'browser',
      'web',
      'browserify',
      ['jam', 'main'],
      'main',
      'index'
    ]
  },
  entry: ['./examples'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /^((?!\.module).)*\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.module\.css$/,
        loaders: [
          'style-loader',
          'css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]!'
        ]
      },
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: [node_modules_dir],
        include: [path.join(__dirname, 'src'), path.join(__dirname, 'example')]
      }
    ]
  }
};
