const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: __dirname + "/src/index.js",
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use:['babel-loader'],
      }
    ]
  },

  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    contentBase: './static',
    historyApiFallback: true
  }
}
