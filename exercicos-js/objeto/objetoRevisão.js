// coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
  modelo: 'A4',
  valor: 89000,
  proprietário:{
    nome: 'Raul',
    idade: 59
  },
  condutores:{
    nome: 'Junior',
    idade: 19
  }
}
//carro.proprietário.idade = 60
console.log(carro.proprietário)