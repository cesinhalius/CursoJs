const fs = require('fs');

const produto = {
  nome: 'Celular',
  preco: 999.00,
  desconto:0.25
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto),err =>{
  console.log(err || 'Arquivo salvo!')
})