//criação de um objeto q representa um id
const sequence = {
    _id: 1,//tem q usar o : para notação json e não =
    get id() { return this._id++ }
}
// const q ira conter cada um dos ids retornados da função anterior
const produtos = {

}

//funcção q retorna um objeto do tipo produto
function salvarProduto(produto) {
    if (!produto.id) produto.id = sequence.id// se o id do produto n~ estiver setado 
    produtos[produto.id] = produto// se não estiver setado adiciona um novo elemento dentro de produto
    return produto
}

// função para pegar o produto por id
function getProduto(id) {
    return produtos[id] || {}//retorna o objeto ou um objeto vazio
}

//função para retornar todos os produtos
function getProdutos() {
    return Object.values(produtos) // retorna apenas os valores dos produtos 
}

// transformando essas 3 funções de local para exports
module.exports = { salvarProduto, getProduto, getProdutos }
