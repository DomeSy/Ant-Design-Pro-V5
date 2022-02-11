
<h1 align="center">Ant Design Pro V5</h1>

## 前言
以学习 Ant Design Pro V5 为目的，设置更简单的配置，更好用的组件，以项目为标准，创造属于自身项目的组件轮子，如果对大家有帮助，请不要吝惜你的 Star~
## 线上预览

![](http://mobile.domesy.cn/img/img1.png)
![](http://mobile.domesy.cn/img/img2.png)

- 预览: http://www.domesy.cn/
- 语雀: https://www.yuque.com/domesy/pro

## 如何使用

```bash
$ yarn install
$ yarn run start // 运行
$ yarn run build //打包（测试）
$ yarn run build:pre //打包（正式）
```

## cli 安装
```bash
$ npm install domesy -g

// 在命令行中使用 domesy 命令即可
```

![](http://mobile.domesy.cn/img/img3.png)

## 推荐模板

```
├── config                   # umi 配置，包含路由，构建等配置
├── mock                     # 本地模拟数据
├── public
│   └── favicon.png          # Favicon
├── src
│   ├── assets               # 本地静态资源
│   ├── commonPages          # 公共页面
│   ├── components           # 业务通用组件
│   ├── e2e                  # 集成测试用例
│   ├── layouts              # 通用布局
│   ├── models               # 全局 dva model
│   ├── pages                # 业务页面入口和常用模板
│   ├── services             # 后台接口服务
│   ├── utils                # 工具库
│   ├── locales              # 国际化资源
│   ├── global.less          # 全局样式
│   └── global.ts            # 全局 JS
├── tests                    # 测试工具
├── README.md
└── package.json
