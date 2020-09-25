// config/webpack.config.prod.js
const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
//分离css,线上打包使用,不要在开发中使用,无法热更新
/* const glob = require('glob');
const PurgeCSSPlugin = require('purgecss-webpack-plugin'); */

module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  plugins: [
    /*  new PurgeCSSPlugin({
      paths: glob.sync(path.resolve(__dirname, '../src/*'), { nodir: true }),
    }), */
    new CleanWebpackPlugin(),
  ],
});
