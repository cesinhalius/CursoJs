const produtos = [
  {nome:'Notebook', preco: 2500, fragil:true},
  {nome:'Mesa', preco:4000, fragil:true},
  {nome:'copo de aço', preco:30,fragil:false}
]

console.log(produtos.filter(function(p){
  return p.preco>=2000 && p.fragil
}))