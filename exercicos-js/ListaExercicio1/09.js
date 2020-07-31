function classificacao(notas){
  let notasCorrigidas = aredondamento(notas)
  if(notasCorrigidas>=40){
    console.log(`Aprovado com a nota de ${notasCorrigidas}`)
  }else{
    console.log(`Reprovado com a nota de ${notasCorrigidas}`)
  }
}
function aredondamento(notas){
  if(notas % 5 > 2){
    return notas + (5 - (notas % 5))
  }else{
    return notas
  }
}

classificacao(100)
classificacao(61)
classificacao(38)
classificacao(30)