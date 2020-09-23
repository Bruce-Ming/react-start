## 从零开始构建react

[参考](https://juejin.im/post/6844904192658636808)

## 导入路径问题

在webpack.config中配置别名alias和tsconfig.json中配置

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
## 添加css scss loader
[参考](https://zhuanlan.zhihu.com/p/59067365)

添加typings.d.ts 解决导入scss标红问题.