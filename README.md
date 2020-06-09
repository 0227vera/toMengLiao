# 个人博客书写速成

## 需要提前安装的包或者软件

1. [nodeJS](https://nodejs.org/en/download/)

> 安装完nodeJS之后在`git bash`中输入命令`npm -v`查看版本，如果有，这说明安装nodeJS成功

2. 安装[vuepress](https://vuepress.vuejs.org/zh/guide/getting-started.html)

> npm i vuepress -g  （备注：i是install的简写）

## 需要掌握最基本的知识

markdown的写法，以及标准，同时这也是blog用的最多的地方

## 项目启动

1. git clone

2. cd toMengLiao

3. npm i

4. npm start

## 目录结构

```tree
.
├── docs
│   ├── .vuepress
│   │   ├── components (需要书写的文件)
│   │   ├── public (公共的静态文件)
│   │   ├── styles (自定义的颜色主题颜色，以及相关的全局配置)
│   │   │   ├── index.styl (全局的样式)
│   │   │   └── palette.styl (全局的颜色配置)
│   │   ├── config.js (全局页面的路由配置，具体的配置信息在此文件中有注释)
│   │
│   ├── README.md 首页的书写
│   ├── about 关于我的页面位置 这个地方需要配合config一起看清楚配置结构
│   ├── other 其他的文件位置
│   ├── post 知识点的文件位置
│
└── node_modules 项目以来包的集合，所有通过npm i安装的文件都放在这个地方
│
└── package.json 项目相关配置和依赖
│
└── package-lock.json 锁定项目依赖包的版本
│
└── deploy.sh blog发布的脚本
│
└── .gitignore git上传时候忽略文件

```
