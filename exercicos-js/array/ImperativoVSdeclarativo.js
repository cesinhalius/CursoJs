const alunos = [{
  nome:'joão',
  nota :7.9
},{nome:'Maria', nota:9.2}]

// Imperativo -  O foco não é muito o que tem que ser feito mais como 
//tem que ser feito isso é importante na maneira  imperativa
let total1 = 0
for(let i = 0;i< alunos.length;i++){
  total1 +=alunos[i].nota
}
console.log(total1/ alunos.length)

// Declarativo - É o contrário  voce simplesmente  diz o que tem que ser feito internamente
const getNota = aluno =>aluno.nota
const soma = (total, atual)=> total + atual

const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)
