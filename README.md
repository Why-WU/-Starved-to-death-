# -Starved-to-death-（饿死了么）

# 项目描述

1.外卖Web App（SPA）应用

2.包括商家，商品，购物车，用户等多个子（功能）模块

3.使用Vue全家桶+ES6+Webpack等

4.采用模块化、组件化、工程化的模式开发

5.前后端分离，后端用以前的稍作更改，主要完成前端问题，后端抛出接口连接即可

# 技术选型

## 前端数据处理，交互，组件化

### Vue全家桶&技术栈

vue

vue-router

vuex

mint-ui

### 滑动&轮播

better-scroll

swiper

### 日期处理

moment

## 前后台交互

mock数据：mockjs

接口测试：postman

ajax请求：axios

## 模块化

es6

babel

## 项目构建&工程化

webpack

vue-cli

# 路由

## 一级路由

### 底部导航

#### 首页

/home

Home.vue

#### 搜索

/search

Search.vue

#### 订单

/order

Order.vue

#### 个人

/personal

Personal.vue

### 无底部导航

#### 登陆

/login

Login.vue

#### 商家

/shop

Shop.vue

## 二级路由（商家下面）

#### 商品

/goods

ShopGoods.vue

#### 评价

/ratings

ShopRatings.vue

#### 信息

/info

ShopInfo.vue

# API接口

#### API(接口)

请求地址url，请求方式，请求参数格式。要知道响应数据(json)的格式。

#### 接口文档

\gshop-server_final\API文档.md

#### 前后台分离

本次主要做前台，动态展现后台的数据

#### mock数据

如果后台有问题或者没做好，要模拟数据

# 简单的学习笔记

## 很官方的说：

咳咳，我应该熟悉or学会or掌握or巩固：

1.项目开发流程

2.组件化、模块化、工程化开发

3.vue-cli

4.模拟json数据，实现前后端分离开发

5.es6

6.优化技巧

7.插件（主要是Vue的）和第三库的使用

8.样式，布局，效果的一些问题

## 实际上：

### 第一次使用MongoDB

www.mongodb.com

配置环境变量，路径写到bin这层

C盘下创建:   C://data/db

命令：mongod，检测是否安装成功。出现   I NETWORK  [initandlisten] Listening on 127.0.0.1   差不多这个样子就OK了

！！！！先mongod再跑后台代码！！！！

