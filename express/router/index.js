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

router.post('/marriage',(req,res)=>{
  // const {name='', star=''} = req.body
  // console.log(req.body)
  res.send({
    code: 1,
    msg: '成功',
    data: {
      result: [
        {
          key: '1',
          name: '上海婚姻登记所',
          address: '上海',
          img: '',
          price: '6',
          star: '4',
          evaluate: '很好',
        },
        {
          key: '2',
          name: '上海婚姻登记所',
          address: '上海',
          img: '',
          price: '6',
          star: '4',
          evaluate: '很好',
        },
        {
          key: '3',
          name: '上海婚姻登记所',
          address: '上海',
          img: '',
          price: '6',
          star: '4',
          evaluate: '很好',
        },
      ],
      total: '12'
    }
  })
})

module.exports = router