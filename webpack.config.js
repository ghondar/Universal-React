var fs = require('fs')
var path = require('path')
var webpack = require('webpack')

var devFlagPlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
})

var config = {
  entry    : [
    'webpack-dev-server/client?http://localhost:8888',
    'webpack/hot/only-dev-server',
    './src/index.jsx'
  ],
  output   : {
    path      : __dirname + '/static/',
    publicPath: 'http://localhost:8888/static/',
    filename  : 'bundle.js',
    hot       : true
  },
  plugins  : [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    devFlagPlugin
  ],
  module   : {
    loaders: [
      {
        test   :  /\.jsx$/,
        loaders: [ 'react-hot', 'babel' ],
        exclude: /node_modules/
      },
      {
        test   : /\.js$/,
        loaders: [ 'babel' ],
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/
      },
      {
        test  : /\.css$/,
        loader: 'style-loader!css-loader!cssnext-loader'
      }
    ]
  },
  resolve  : {
    extensions: [ '', '.jsx', '.js', '.json' ]
  }
}

module.exports = config
