function getPreco (imposto=0, moeda='R$'){
    return `${moeda} ${this.preco * (1-this.desc) * (1+imposto)}`
}

const produto = {
nome: 'Notebook',
preco: 4598,
desc: 0.15,
getPreco
}
console.log(produto.getPreco())

//função call
const carro = {
    preco:49999,
    desc:0.20

}
console.log(getPreco.call(carro))
console.log(getPreco.call(carro, 0.17, "$"))//1º contexto depois os parametros

//apply
console.log(getPreco.apply(carro))
console.log(getPreco.apply(carro, [0.17,'$']))// 1º contexto(carro) depois parametros dentro de array