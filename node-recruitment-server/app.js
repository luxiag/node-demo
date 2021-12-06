const express = require ("express");
const mongoose = require ("mongoose");
const bodyParser = require ("body-parser");
const passport = require("passport");
const colors = require('colors')

const logger = require('morgan')
const cors = require('cors')

const app = express();


// 引入路由


const router =require('./router')
const db = require('./config/keys').mongoURI

// 模拟解决跨域
app.use(cors())
//http 请求日志记录中间件
app.use(logger('dev'))
// 使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//注册路由
app.use('/',router)

// Connect to mongodb
mongoose.connect(db)
  .then(()=>console.log(colors.brightBlue('数据库连接成功')))
  .catch(err=>console.log(colors.brightRed('数据库连接失败',err)));

// passport初始化
app.use(passport.initialize());




app.use("/api/users", users)


const port = process.env.PORT || 5000
const server = app.listen(port, () => {
  const host = server.address().address
  const port = server.address().port

  console.log(colors.brightGreen('express服务启动成功',host,port))
})
