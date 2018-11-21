# vue3.0-koa-mysql
vue3.0+koa+mysql 搭建后台管理系统

前端  vue + vue-router + vuex + axios + es6  + eslint

后端 express + mongoose
1.启动mysql
建一个test2的库
添加userInfo表，表字段（username，userpwd，createTime）后期有空添加自动建表操作

2.打开服务端

 cd server-koa
 
 npm install
 修改config/default.js,改成你数据库的用户名密码配置
 npm run start
3.打开前端

 cd vue3.0
 
 npm install

 npm run serve
