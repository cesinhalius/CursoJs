function jurosSimples(capital, taxa, tempo){
  return capital + (capital* taxa* tempo)
  
}
function jurosCompostos(capital, taxa, tempo){
  return capital + (1+taxa)**tempo
}
console.log(jurosSimples(100, 10/100, 2));
console.log(jurosCompostos(100, 10/100, 2));