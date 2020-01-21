English | [简体中文](./README.zh-CN.md)

# patrick-wechat

⭐️🐟 questionnaire wechat app built with taro, taro-ui and heart❤️.

## Feature

1. 👽 Use [taro](https://github.com/NervJS/taro) as framework.
2. 👨🏻‍💻 Use [taro-ui](https://github.com/NervJS/taro-ui) as UI compoments.
3. 👩🏻‍💻 Use [redux](https://github.com/reduxjs/redux) to manage state.
4. 📈 Combine wechat with third party [f2](https://github.com/antvis/f2) to demonstrate charts.

## Develop

```bash
cd patrick-wechat

# install dependencies
yarn install

# install taro cli
yarn global add @tarojs/cli

# build and watch
yarn run dev:weapp
```

## Update

```bash
# update taro
taro update self

# update project
taro update project
```

## Deploy

```bash
# build and compress
yarn run build:weapp
```

## Upgrade To Taro 2.0

Taro 2.0 is required for this mini app. You can follow [THIS](https://taro-docs.jd.com/taro/docs/migrate-to-2.html) instruction to complete the upgrade.

## Troubleshootting

1. Unable to run in Wechat Devtools after updating

  Delete the project and reimport it if it was already existed in your project list.

## Screenshots

![](screenshots/index.png)
![](screenshots/introduce.png)
![](screenshots/questionnaire.png)
![](screenshots/result.png)

## Why Patrick

Patrick Star is a fictional character in SpongeBob SquarePants And he loves asking questions!

![patrick](https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Patrick_Star.svg/1200px-Patrick_Star.svg.png)