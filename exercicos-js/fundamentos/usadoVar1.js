// variavel visivel fora do bloco 
{ { { { var sera = 'Será?????'   
console.log(sera)
} } } }
console.log(sera)

// variavel nao visivel fora do escobo da function
function teste(){
  var local = 123
  console.log(local)
}

teste()
console.log(local)