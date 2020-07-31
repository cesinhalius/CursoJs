const pai = { nome: 'Pedro', cor: 'preto'}

const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.cor)

const filha2 = Object.create(pai, {
  nome: {value:'Bia', writable:false, enumerable: true}
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem a cor ${filha2.cor}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2){
  filha2.hasOwnProperty(key) ? 
      console.log(key) : console.log(`por Herança: ${key}`)
}