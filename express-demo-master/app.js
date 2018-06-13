const express = require('express')
const pug = require('pug')

const app = express()

let rawList=[
  {id: 1, name: "陈琦" , sex: "girl", xueyuan: "软件学院" , xibie: "集成电路" , num:"3117390012" },
  {id: 2, name: "董名" , sex: "girl", xueyuan: "软件学院" , xibie: "集成电路" , num:"3117390016"},
  {id: 3, name: "郑斐" , sex: "girl", xueyuan: "软件学院" , xibie: "集成电路" , num:"3117390005"},
  {id: 4, name: "段乐欣" , sex: "girl", xueyuan: "软件学院" , xibie: "集成电路" , num:"3117390017"}
]

app.set('view engine', 'pug')
app.set('views', './views')

app.get('/token', function (req, res) {
  res.send("token");
})

app.get('/list', function(req, res) {
  res.render('list', {list: rawList})
})

//陈琦
app.get('/delete/:id',function(req,res){
  let id=parseInt(req.params.id);
  rawList=rawList.filter(function(data){
    return data.id !== id
  })
  res.redirect("/list")
})
//董名 郑斐
app.get('/add',function(req,res){
  res.render('add',{addList:
    ['']
  })
})
//段乐欣
app.get('/submit/:id',function(req,res){
  let id=parseInt(req.params.id);
  rawList=rawList.filter(function(data){
    return data.id=id
  })
  res.redirect("/list")
})

app.get('*', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})