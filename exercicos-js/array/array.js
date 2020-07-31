//console.log(typeof Array, typeof new Array, typeof [])

let aprovado = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovado)

aprovado = ['Bia', 'Carlos ', 'Ana']
console.log(aprovado[0])
console.log(aprovado[3])

aprovado[3] = 'Paulo'
aprovado.push('Paula')
console.log(aprovado.length)

aprovado[9] = 'Rafael'
console.log(aprovado.length)
console.log(aprovado[8] === undefined)
aprovado.sort()
console.log(aprovado)

delete aprovado[1]
console.log(aprovado)
aprovado.splice(1,1)
console.log(aprovado)
