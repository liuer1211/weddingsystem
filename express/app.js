const errorHandler = require('errorhandler');
const express = require('express');
const path = require('path');
// const morgan = require('morgan') // 日志
const router = require('./router')

const app = express();

// 资源开放
app.use('/public',express.static(path.join(__dirname,'./public')))
app.use('/node_modules',express.static(path.join(__dirname,'./node_modules')))

// 模板引擎
app.engine('html',require('express-art-template'))
app.set('view options',{
  debug: process.env.NODE_ENV !== 'production'
})
app.set('views', path.join(__dirname,'views')) // 模板文件存储位置
app.set('view engine','html') // 可以省略模板文件后缀名

// app.use(morgan('dev'))
app.use(router)
app.use(express.json())  // json
app.use(express.urlencoded({ // form表单
  extended:true
}))

if(process.env.NODE_ENV === 'development'){
  app.use(errorHandler())
}

app.listen(5011,()=>{
  console.log('---端口 5011---')
})