const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// sem callback
let notaBaixa = []
for(let i in notas){
  if(notas[i]< 7){
    notaBaixa.push(notas[i])
  }
}
console.log(notaBaixa)

// com callback 
const notaBaixa2 = notas.filter(function (nota){
  return nota < 7
})
console.log(notaBaixa2)

const notaBaixa3 = notas.filter(nota => nota < 7)

console.log(notaBaixa3)