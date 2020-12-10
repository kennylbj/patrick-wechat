[English](./README.md) | 简体中文

# patrick-wechat

⭐️🐟 基于taro, taro-ui的小程序问卷app❤️.

## 特性

1. 👽 使用[taro](https://github.com/NervJS/taro)作为开发框架，编写React风格的代码。
2. 👨🏻‍💻 使用[taro-ui](https://github.com/NervJS/taro-ui)作为视图组件，简化UI构建。
3. 👩🏻‍💻 使用[redux](https://github.com/reduxjs/redux)来管理APP状态。
4. 📈 采用第三方的[f2](https://github.com/antvis/f2)来展示图表用法。

## 开发

```bash
cd patrick-wechat

# install dependencies
yarn install

# install taro cli (v3)
yarn global add @tarojs/cli

# build and watch
yarn run dev:weapp
```

## 更新

```bash
# 更新 taro
taro update self

# 更新项目
taro update project
```

## 部署

```bash
# 构建、压缩
yarn run build:weapp
```

## 升级至Taro 3.0

该项目已经升级至Taro V3版本，你可以根据[该指引](https://taro-docs.jd.com/taro/docs/migration)来完成Taro V3的升级。
如果你仍想使用Taro V2版本，可以切换至[Taro V2分支](https://github.com/kennylbj/patrick-wechat/tree/taro-v2)。

## 常见问题

1. 升级后无法在微信开发者工具中运行

  在开发者工具中删除该项目，然后重新导入。

## 截图

<div align="center">
  <img src="./screenshots/index.png" width="200" />
  <img src="./screenshots/introduce.png" width="200" />
  <img src="./screenshots/questionnaire.png" width="200" />
  <img src="./screenshots/result.png" width="200" />
</div>

## 为什么是派大星

派大星是海绵宝宝中的一个角色，它是个问题宝宝。

![patrick](./screenshots/patrick.png)
