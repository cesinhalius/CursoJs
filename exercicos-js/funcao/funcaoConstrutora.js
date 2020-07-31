function Carro(velocidadeMaxima = 200, delta = 5){
  // atributo privato 
  let velocidadeAtual = 0

  // metodo publico

  this.acelarar = function(){
    if(velocidadeAtual + delta <= velocidadeMaxima){
      velocidadeAtual +=delta
    }else{
      velocidadeAtual = velocidadeMaxima
    }
  }
  this.getVelocidadeAtual = function () {
    return velocidadeAtual
  }
}

const uno = new Carro
uno.acelarar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelarar()
ferrari.acelarar()
ferrari.acelarar()
console.log(ferrari.getVelocidadeAtual())