var path = require('path')
var fs = require('fs')
var webpack = require('webpack')
var strip = require('strip-loader')
var CleanPlugin = require('clean-webpack-plugin')
var relativeAssetsPath = './static'
var assetsPath = path.join(__dirname, relativeAssetsPath)

module.exports = {
  devtool  : 'source-map',
  entry    : [ './src/index.jsx' ],
  output   : {
    path      : assetsPath,
    filename  : 'bundle.js',
    publicPath: 'static/'
  },
  module   : {
    loaders: [
      {
        test   :  /\.jsx$/,
        loaders: [ strip.loader('debug'), 'babel' ],
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
  progress : true,
  resolve  : {
    modulesDirectories: [
      'js',
      'node_modules'
    ],
    extensions        : [ '', '.json', '.js', 'jsx' ]
  },
  plugins  : [
    new CleanPlugin([ relativeAssetsPath ]),
    new webpack.DefinePlugin({
      __CLIENT__     : true,
      __SERVER__     : false,
      __DEVELOPMENT__: false,
      __DEVTOOLS__   : false,
      __DEV__        : false
    }),

    // ignore dev config
    new webpack.IgnorePlugin(/\.\/dev/, /\/config$/),

    // set global vars
    new webpack.DefinePlugin({
      'process.env': {
        // Useful to reduce the size of client-side libraries, e.g. react
        NODE_ENV: JSON.stringify('production')
      }
    }),

    // optimizations
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
          warnings: false
        }
    })
  ]
}
