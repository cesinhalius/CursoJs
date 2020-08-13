const funcionario= {nome: 'Maria ', salario: 1999.99}
const clone = {ativo:true, ...funcionario}

console.log(clone)

const grupoA = ['Joao', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)