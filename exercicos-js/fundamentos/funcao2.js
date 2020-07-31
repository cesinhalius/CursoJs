// Armazenamento uma função em uma variavel 
const imprimirSoma = function(a, b) {
  console.log(a + b)
}

imprimirSoma(2, 3)
// Aramzenamento uma função arrow emm uma variavel

const soma = (a,b)=>{
  return a + b
}
console.log(soma(2,3))

// retorno implicito
const subtracao = (a, b) => a - b
console.log(subtracao(2 , 3))

// apenas um parametro
const imprimir2 = a => console.log(a + 1)
imprimir2(2)