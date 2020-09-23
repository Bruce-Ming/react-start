// config/webpack.config.base.js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: path.resolve(__dirname, '../src/main.tsx'),
    output: {
        filename: '[name].[hash].js', // 打包出的结果文件
        path: path.resolve(__dirname, '../dist') // 打包到dist目录下
    },
    devtool: 'cheap-module-source-map',
   // performance: { hints:false },
    module: {
        rules: [
          {
            test: /\.(js|ts)x?$/,  //jsx或者tsx文件
            exclude: /(node_modules)/, // 排除node_modules
            use: {
              loader: 'babel-loader',
              options: {
                // babel 转义的配置选项
                babelrc: false,
                presets: [
                    // 添加 preset-react
                    require.resolve('@babel/preset-react'),
                    [require.resolve('@babel/preset-env'), {modules: false}]
                ],
                cacheDirectory: true
            }
            }
          },
          {
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                      importLoaders: 1,
                      modules: true
                    }
                },
                "sass-loader"
            ]
        }
        
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx','.tsx','.ts','.scss','.sass'],
        alias: {
            "@components":path.resolve(__dirname, '../src/components'),
            "@pages":path.resolve(__dirname, '../src/pages'),
            "@utils":path.resolve(__dirname, '../src/utils'),
         },
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename: 'index.html', // 打包出来的文件名
            template: path.resolve(__dirname,'../public/index.html'), // 指定模板文件
            hash: true, // 在引用资源的后面增加hash戳
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash].css'
        })
    ]
};

