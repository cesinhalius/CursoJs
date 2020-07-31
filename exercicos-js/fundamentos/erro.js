function tratarErroseLancar(erro){
  throw{
         nome: error.name,
         msg: erro.message,
         data: new Date 
  }
}

function imprimirNomeGritado(obj){
  try{
    console.log(obj.name.toUpperCase() + '!!!')
  }
  catch(e){
    tratarErroseLancar(e)
  }
  finally{
    console.log('final')
  }
}