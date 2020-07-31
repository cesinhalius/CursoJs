function triangulos(a, b, c){
  if(a===b && b===c){
    return console.log('Equilátero')
  }else if(a===b && b!=c)
  return console.log('Isósceles')
  else{
    return console.log('Escaleno')
  }
}

triangulos(2,2,2)
triangulos(2,2,3)
triangulos(1,2,3)