# 从零开始构建 react

[参考](https://juejin.im/post/6844904192658636808)

## 导入路径问题

在 webpack.config 中配置别名 alias 和 tsconfig.json 中配置

```json
//  webpack.config
    extensions: ['.js', '.jsx','.tsx','.ts'],//添加后缀,防止导入无后缀的组件报错
    alias: {
        "@components":path.resolve(__dirname, '../src/components'),
        "@pages":path.resolve(__dirname, '../src/pages'),
        "@utils":path.resolve(__dirname, '../src/utils'),
        },
        // tsconfig.json
    "baseUrl": ".",
    "paths": {
    "@components/*":["./src/components/*"]
    }
```

## 添加 css scss loader

[参考](https://zhuanlan.zhihu.com/p/59067365)

添加 typings.d.ts 解决导入 scss 标红问题.

## 添加 mobx

```js
//遇到问题,@装饰器用不了,报错
// Support for the experimental syntax 'decorators-legacy' isn't currently enabled 未启用装饰器问题,安装插件
// Missing class properties transform  插件配置问题
yarn add @babel/plugin-proposal-decorators -D
// 修改配置文件babelrc,添加插件支持.
plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-transform-runtime'],
  ],
```

## 添加异步函数支持

遇到问题,

```js
regeneratorRuntime is not defined 错误
```

分析,异步函数的垫片没装, babel 插件没装,安装插件.

```js
npm i -D @babel/plugin-transform-runtime
npm i @babel/runtime
```

更新 babelrc

```js
{
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "regenerator": true,
        "corejs": 3 // or 2; if polyfills needed
        ...
      }
    ]
  ]
}
```

[参考](https://stackoverflow.com/questions/33527653/babel-6-regeneratorruntime-is-not-defined)

> store 文件夹为 mobx 文件夹

## 添加 mobx-state-tree

```js
yarn add mobx-state-tree
```
