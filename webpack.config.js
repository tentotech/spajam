const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const poststylus = require('poststylus')


module.exports = {
  entry: [
    'react-hot-loader/patch',
    './src/index.js'
  ],
  output: {
    path: __dirname + '/static',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['react-hot-loader/webpack', 'babel-loader'],
      },
      {
        test: /.pug$/,
        exclude: /node_modules/,
        use: 'pug-loader'
      },
      {
        test: /\.styl$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'stylus-loader']
      }
    ]
  },

  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.styl']
  },
  devServer: {
    contentBase: './static',
    historyApiFallback: true,
    hot: true
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      stylus: {
        use: poststylus(['autoprefixer'])
      }
    }),
    new HtmlWebpackPlugin({
      template: './src/index.pug'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}
