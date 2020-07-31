function AnoBissexto(ano){
  if(ano<=0){
    return false
  }else if(ano % 400 == 0){
    console.log(`O ano de ${ano} é Bissexto`)
    return true
  }else if (ano % 100 == 0){
    console.log(`O ano de ${ano} não é Bissexto`)
    return false
  }else if (ano % 4 == 0){
    console.log(`O ano de ${ano} é Bissexto`)
    return true
  }else{
    console.log(`O ano de ${ano} não é Bissexto`)
    return false
  }
}

AnoBissexto(2020)
AnoBissexto(2021)