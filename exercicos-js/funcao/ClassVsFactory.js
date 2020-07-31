class Pessoa {
  constructor (nome){
    this.nome = nome
  }
  falar(){
    console.log(`Meu nome é ${this.nome}`)
  }
}
const p1 = new Pessoa('JP')
p1.falar()

const pessoa = nome =>{
  return{
    falar: () => console.log(`Meu nome é ${nome}`)
  }
}
const p2 = pessoa('JP')
p2.falar()