//Objeto é uma coleção dinamica de pares chave/valor
const produto = new Object//object é uma função atraves do new
produto.nome = 'cadeira'
produto['marca do produto']= 'generica'
produto.preco =220
console.log(produto)
delete produto.preco

const carro = {
    modelo:'A4',
    valor: 90000,
    proprietario:{
        nome: 'Raul',
        idade: 56,
        endereço: {//objeto dentro de objeto
            logradouro: ' Rua ABC'
        }
    },
    condutores:[{//array de objetos
nome : ' junior',
idade: 19

    },{
        nome : 'anaa',
        idade: 42
    }]
}
console.log(carro)