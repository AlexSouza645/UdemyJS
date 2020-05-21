const url ='http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')// axios é um client http q obtem informações de algo remoto

//como obter imnformações do servidor
axios.get(url).then(response =>{
    const funcionarios= response.data
    console.log(funcionarios)

//china mulher menor salario





//const paraObjeto = json => JSON.parse(json)//transforma string em objeto ou Json para objeto
//const apenasPreco = produto => produto.preço
//const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
  //  console.log(resultado)}
})