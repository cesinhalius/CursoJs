const express = require('express');
const banco = require('./bancodedados');
const bodyPaser = require('body-parser');
const app = express();


app.use(bodyPaser.urlencoded({ extended: true}))

app.get('/', (req,res)=> {
  res.send(banco.getProdutos())
})
app.get('/produto/:id', (req,res)=>{
  res.send(banco.getProduto(req.params.id))
})

app.post('/produtos', (req,res)=>{
  const produto = banco.salvarProduto({
    nome:req.body.nome,
    preco:req.body.preco
  })
  res.send(produto)
})

app.put('/produto/:id', (req, res)=>{
  const produto = bancoDeDados.salvarProduto({
    id: req.params.id,
    nome: req.body.nome,
    preco: req.body.preco
})
res.send(produto) // JSON
})
app.delete('/produto/:id', (req,res)=>{
  const produto = banco.excluirProduto(req.params.id)
  res.send(produto)
})

app.listen(3000);