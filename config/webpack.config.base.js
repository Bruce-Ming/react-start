// config/webpack.config.base.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: path.resolve(__dirname, '../src/App.tsx'),
  output: {
    filename: '[name].[hash].js', // 打包出的结果文件
    path: path.resolve(__dirname, '../dist'), // 打包到dist目录下
  },
  devtool: 'cheap-module-source-map',
  // performance: { hints:false },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/, //jsx或者tsx文件
        exclude: /(node_modules)/, // 排除node_modules
        use: {
          loader: 'babel-loader',
          options: {
            // babel 转义的配置选项
            babelrc: false,
            presets: [
              // 添加 preset-react
              require.resolve('@babel/preset-react'),
              [require.resolve('@babel/preset-env'), { modules: false }],
            ],
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: true,
            },
          },
          {
            loader: 'postcss-loader',
          },

          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts', '.scss', '.sass'],
    alias: {
      '@components': path.resolve(__dirname, '../src/components'),
      '@pages': path.resolve(__dirname, '../src/pages'),
      '@utils': path.resolve(__dirname, '../src/utils'),
      '@models': path.resolve(__dirname, '../src/models'),
      '@stores': path.resolve(__dirname, '../src/stores'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html', // 打包出来的文件名
      template: path.resolve(__dirname, '../public/index.html'), // 指定模板文件
      hash: true, // 在引用资源的后面增加hash戳
      publicPath: '/', //打包出来的main基本路径影响到路由
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
    }),
    /* new PurgeCSSPlugin({
      paths: glob.sync(path.resolve(__dirname, '../src/*'), { nodir: true }),
    }), */
  ],
};
