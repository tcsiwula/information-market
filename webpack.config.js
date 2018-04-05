var webpack = require('webpack')
var path = require('path')

var config = {
  entry: __dirname + '/src/index.jsx',
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js',
    publicPath: __dirname + '/build'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: __dirname + '/build',
    inline: true,
    // disableHostCheck: true,
    host: '0.0.0.0',
    port: 3080
  },
  module: {
    loaders: [{
      test: /\.jsx?/,
      include: __dirname + '/src',
      loader: 'babel',
      query: {presets: ['es2015', 'react']}
      }]
  }
}

module.exports = config
