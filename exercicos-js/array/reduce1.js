const alunos = [
  {nome: 'João', nota:7.3, bolsista: false},
  {nome: 'Maria', nota:6.3, bolsista: true},
  {nome: 'Pedro', nota:9.3, bolsista: false},
  {nome: 'Ana', nota:8.9, bolsista: true},
]

console.log(alunos.map(a=>a.nota))
const resultado = alunos.map(a=>a.nota).reduce(function(acumulador,atual){
  console.log(acumulador, atual)
  return acumulador + atual
}, 0)
console.log(resultado.toFixed(1))