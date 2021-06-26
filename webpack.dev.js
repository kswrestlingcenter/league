const { merge } = require('webpack-merge');
const config = require('./webpack.config.js');
const webpack = require('webpack')
const path = require('path')

module.exports = merge(config, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    historyApiFallback: true,
    open: false, // This will auto-open the project in default browser, could also add --open to npm script to make this work
    hot: true, // Hot reloading
    overlay: true,
    stats: {
      color: true
    },
    compress: true,
    port: 4000,
    host: '0.0.0.0',

    proxy: {
      "/api": {
        target: "http://localhost:6060"
      }
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});
