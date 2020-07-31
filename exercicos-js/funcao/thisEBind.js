const pessoa ={
  saudacao: 'Bom dia',
  falar(){
    console.log(this.saudacao)
  }
}

pessoa.falar()
const falar = pessoa.falar
falar()  // conflito entre paradigma: funcional e POO

const falarPessoa = pessoa.falar.bind(pessoa)  // a Função Bind ela amarra o this na constante do objeto 
falarPessoa()