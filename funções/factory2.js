function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('notebook', 2199.00))
console.log(criarProduto('geladeira', 1999.00))