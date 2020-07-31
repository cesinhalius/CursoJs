Array.prototype.filter2 = function(callback){
  const newArray=[]
  for(let i = 0;i<this.length;i++){
    if(callback(this[i],i,this)){
      newArray.push(this[i])
    }
  }
  return newArray
}



const produtos = [
  {nome:'Notebook', preco: 2500, fragil:true},
  {nome:'Mesa', preco:4000, fragil:true},
  {nome:'copo de aço', preco:30,fragil:false}
]

console.log(produtos.filter2(function(p){
  return p.preco>=2000 && p.fragil
}))