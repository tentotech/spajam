const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const poststylus = require('poststylus')


module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname + '/static',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: __dirname + '/src',
        exclude: /node_modules/,
        use: ['babel-loader'],
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
    historyApiFallback: true
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      stylus: {
        use: poststylus(['autoprefixer'])
      }
    }),
    new HtmlWebpackPlugin({
      template: './src/index.pug'
    })
  ]
}
