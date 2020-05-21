//operador de desustruturação
const pessoa = {
    nome: 'Ana ',
    idade: '5',
    endereço: {
        logradouro: 'Rua Abc',
        numero: 1000,
    }
}


const { nome, idade} = pessoa // primeiro mostrar oq eu quero tirar e em seguida de qual objeto
console.log(nome, idade)

const { nome: n, idade: i}= pessoa
console.log(n,i)

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const {endereço:{logradouro, numero , cep}}= pessoa
console.log(logradouro,numero,cep)

const {endereço}= pessoa
console.log(endereço)