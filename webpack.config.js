var webpack = require('webpack')
var path = require('path')

var config = {
  entry: __dirname + '/src/index.jsx',
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js',
    publicPath: '/'
  },
  devtool: 'source-map',
  devServer: {
    inline: true,
    contentBase: __dirname + '/build',
    port: 3080
  },
  module: {
    loaders: [{
      test: /\.jsx?/,
      include: __dirname,
      loader: 'babel',
      query: {presets: ['es2015', 'react']}
      }]
  }
}

module.exports = config
