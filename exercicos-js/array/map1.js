const nums = [1, 2, 3, 4, 5]

// For com propósito
let resultado = nums.map(function(e) {
    return e * 2
})

console.log(resultado,nums)

const soma10 = e => e + 10
resultado = nums.map(soma10)
console.log(resultado, nums)
const triplo = e => e * 3
resultado = nums.map(triplo)
console.log(resultado, nums)
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`
resultado = nums.map(paraDinheiro)
console.log(resultado, nums)
resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)