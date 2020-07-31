function fatorial (a){
if(a == 0){
  return 1
}  else{
  return a * fatorial(a - 1)
}
}
console.log(fatorial(3))