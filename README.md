# u-education
U能教育官网：基于vue-cli3.0搭建的多页面框架。

## 项目基本结构
```javascript
.
├── public   // 静态资源
├── package.json // 依赖包配置说明
├── vue.config.js  // 打包配置
├── .env.xx     // 环境变量
├── src         // 源码
     ├── api    // api
     ├── assets // 动态打包资源
     └── components // 通用组件
     ├── pages      // 页面源码
     ├── styles     // 通用样式设置 
     └── utils      // 工具类
```

## components

##### UContainer：通用头部底部组件     

##### UCarousel:轮播组件  
params    
* mold:默认banner轮播图
* bannerList: 轮播内容，默认为空数组

##### USwiper:切换轮播组件

##### UMap:腾讯地图


## 依赖安装
```
npm install
```

### 编译及热启动项目
```
npm run serve
```

### 编译及打包
```
npm run build
```

### 代码校验
```
npm run lint
```
