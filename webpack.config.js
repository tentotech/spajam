module.exports = {
  entry: __dirname + "./src/index.js",
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ]
  },

  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss', '.css']
  },
  devServer: {
    contentBase: './static',
    historyApiFallback: true
  }
}
