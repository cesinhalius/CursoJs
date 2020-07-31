class Avo {
  constructor(nome, sobrenome = 'Silva', idade){
    this.nome = nome
    this.sobrenome = sobrenome
    this.idade = idade
  }
}

class Pai extends Avo{
  constructor(nome, sobrenome, idade){
    super(nome,sobrenome,idade)
  }
}

class Filho extends Pai{
  constructor(sobrenome){
    super('Vitor', sobrenome, 32)
  }
}
let filho1 = new Filho
console.log(filho1)