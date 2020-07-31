let stringPontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"

function avaliaPontuacao(stringPontuacoes){
 let Recorde = 0
 let pontuacoes = stringPontuacoes.split(",")
 let pior = 1
 let maiorPontuacao = pontuacoes[0]
 let menorPontuacao = pontuacoes[0]

 for(let i = 1; i< pontuacoes.length; i++){
   if(pontuacoes[i]> maiorPontuacao){
     maiorPontuacao = pontuacoes[i]
     Recorde++
   }else if(pontuacoes[i]< menorPontuacao){
     menorPontuacao= pontuacoes[i]
     pior= i+1
   }
 }
return [Recorde, pior]
}
console.log(avaliaPontuacao(stringPontuacoes))