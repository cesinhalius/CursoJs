function Pessoa(){
  this.idade = 0

  const self = this  // usando uma constante como this para acessar o atributo do objeto
  setInterval(function(){
    self.idade++
    console.log(self.idade)
  }/*.bind(this)*/, 1000)
}

new Pessoa