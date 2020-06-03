//criação de um objeto q representa um id
const sequence = {
    _id = 1,
    get id (){ return this.id++}
}
// const q ira conter cada um dos ids retornados da função anterior
const produtos={

}
//funcção q retorna um objeto do tipo produto
function salvarProduto(produto){
    if (!produto.id)produto.id = sequence.id// se o id do produto n~ estiver setado 
    produto[produto.id]= produto// se não adiciona um novo produto
    return produto 
}
// função para pegar o produto por id
function  getProduto(id){
    return produtos[id]||{}//retorna o objeto ou um objeto vazio
}

//função para retornar todos os produtos
function getProdutos (){
  return Object.values(produtos) // retorna aenas os valores dos produtos 
}

// transformando essas 3 funções de local para exports
module.exports={salvarProduto, getProduto,getProdutos}
