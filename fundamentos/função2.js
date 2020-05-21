//armazenando uma função em uma variavel
const imprimirSoma = function (a,b){
console.log(a+b)


}
imprimirSoma (2,3)

//armazenando0 uma funçao arrow em uma variável
const soma = (a,b) => {
    return a+b
}
console.log(soma(2,3))

//retorno implicito
const subtraçao =(a,b) => a-b//usado apenas para uma linha de código de função
console.log(subtraçao(2,3))