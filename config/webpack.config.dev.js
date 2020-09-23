// config/webpack.config.dev.js
const path = require('path')
const {merge} = require('webpack-merge')
const baseConfig = require('./webpack.config.base.js')

const devConfig = {
    mode:'development',
    devServer: {
        port: 3000,
        host: 'localhost',
        contentBase: path.join(__dirname, '../public'),
        watchContentBase: true,
        publicPath: '/',
        compress: true,
        historyApiFallback: true,
        hot: true,
        clientLogLevel: 'error',
        open: true,
        watchOptions: {
          ignored: /node_modules/
        },
    }
}


module.exports = merge(baseConfig, devConfig);

