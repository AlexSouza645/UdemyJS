let valor//não inicializada
console.log(valor)

valor = null// ausência de valor
console.log(valor)

const produto = {}
console.log(produto.preço)
console.log(produto)

produto.preço = 3.50
console.log(produto)

produto.preço = undefined//evite atribuir undefined
console.log(!!produto.preço)
console.log(produto)