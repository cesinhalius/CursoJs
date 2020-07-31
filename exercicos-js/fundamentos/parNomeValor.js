// par nome/valor
const saudacao = 'Opa' //contexto lexico 1

function exec(){
  const saudacao = 'Falaaaa'
  return saudacao
}

// Objeto sao grupo aninhado de pares nome/valor
const cliente = {
  nome:' Pedro' ,
  idade:32,
  peso:90,
  endereco: {
    logradouro:'Rua muito legal',
    numero:123
  }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)