const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
  // res.send('hello')
  res.render('index.html')
})

router.get('/home',(req,res)=>{
  res.render('index.html')
})

router.get('/news',(req,res)=>{
  res.render('news.html')
})

module.exports = router