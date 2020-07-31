const pilotos = ['Vettel', 'Alonso','Massa','Bottas']
pilotos.pop(); // remove o elemento da ultima posição
console.log(pilotos)

pilotos.push('Senna') // adiciona um elemento na ultima posição
console.log(pilotos)


pilotos.shift()// remova o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton')// adiciona o elemento na primeira posição
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1) // massa quebrou :(
console.log(pilotos)

const Algumpiloto = pilotos.slice(2)// criação de um novo array
console.log(Algumpiloto)

const Algumpiloto2 = pilotos.slice(1,4)
console.log(Algumpiloto2)
