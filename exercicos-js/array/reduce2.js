const alunos = [
  {nome: 'João', nota:7.3, bolsista: false},
  {nome: 'Maria', nota:6.3, bolsista: true},
  {nome: 'Pedro', nota:9.3, bolsista: false},
  {nome: 'Ana', nota:8.9, bolsista: true},
]

// Desafio 1 - Todos os alunos são bolsistas?
const Bolsista = (result, bolsista) => result && bolsista
console.log(alunos.map(a=>a.bolsista).reduce(Bolsista))

// Desafio 2 - algum aluno é bolsista?

const Ebolsista =  (result, bolsista) => result || bolsista
console.log(alunos.map(a=>a.bolsista).reduce(Ebolsista))
