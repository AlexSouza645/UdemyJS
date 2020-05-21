const url ='http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')// axios é um client http q obtem informações de algo remoto
//china mulher menor salario

const chineses=f =>f.pais==='China'
const mulheres =f =>f.genero ==='F'
const menorSalario = (func, funcAtual)=>{
  return func.salario< funcAtual.salario ? func :funcAtual//? = se não
}

//como obter imnformações do servidor
axios.get(url).then(response =>{
    const funcionarios= response.data
    console.log(funcionarios)

    const func= funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(menorSalario)
    console.log(func)

/* para resolver o desafio 
1. eu crio funções em const q vão filtrar por 
pais const chineses=f =>f.pais==='China'
genero const mulheres =f =>f.genero ==='F'
2. eu crio funcões q vão retornar o funcionario q tem, o menor salario
const menorSalario = (func, funcAtual)=>{
  return func.salario< funcAtual.salario ? func :funcAtual//? = se não
}

 */




})