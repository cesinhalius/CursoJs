Array.prototype.forEach2 = function(callback){
  for(let a=0;a< this.length;a++){
    callback(this[a], a, this)
  }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})