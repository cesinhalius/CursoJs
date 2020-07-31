Array.prototype.map2 = function(callback){
const newArray = []
for(let a =0;a<this.length;a++){
  newArray.push(callback(this[a],a,this))
}
return newArray
}


const carrinho =[
  '{"nome": "Borracha", "preco": 3.45}',
  '{"nome": "Caderno", "preco": 13.90}',
  '{"nome": "Lapis de Cor", "preco": 41.22}',
  '{"nome": "Cartolina", "preco": 6.50}'
]


const paraObj = json => JSON.parse(json)
const Preco = p =>p.preco

const result = carrinho.map2(paraObj).map(Preco)
console.log(result)