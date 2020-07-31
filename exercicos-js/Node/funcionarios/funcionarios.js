const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";
const axios = require("axios");

// mulher chinesa com o menor salario
const mulheresChinesa = (f) => f.pais === "China" && f.genero === "F";
const menorSalario = (f, fAtual) => {
  return f.salario < fAtual.salario ? f : fAtual;
};

axios.get(url).then((response) => {
  const funcionario = response.data;
  //console.log(funcionario)

  const func = funcionario.filter(mulheresChinesa).reduce(menorSalario);
  console.log(func);
});
