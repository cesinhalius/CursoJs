const bodyParser = require('body-parser')
const express = require('express')
const multer = require('multer')


const app = express()




app.use(express.static('.'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const storege = multer.diskStorage({
  destination: function (req, file, callback){
    callback(null, './upload')
  },
  filename: function (req,file,callback){
    callback(null, `${Date.now} ${file.originalname}`)
  }
})

app.post('/upload', (req,res)=>{
  upload(req,res,err =>{
    if(err){
      return res.end('Ocorreu um erro')
    }
    res.end('Concluido com sucesso')
  })
})

app.listen(3000, () => console.log('Executando....'))