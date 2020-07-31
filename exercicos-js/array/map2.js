const carrinho =[
  '{"nome": "Borracha", "preco": 3.45}',
  '{"nome": "Caderno", "preco": 13.90}',
  '{"nome": "Lapis de Cor", "preco": 41.22}',
  '{"nome": "Cartolina", "preco": 6.50}'
]


// outro modo mais simples te resolver o problema
const result = carrinho.map(elementos =>JSON.parse(elementos))


/// retornar um array de preço
const paraObj = json => JSON.parse(json)
const Preco = p =>p.preco

const result = carrinho.map(paraObj).map(Preco)
console.log(result)