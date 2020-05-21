function soma (){
    let soma = 0
    for (i in arguments) {// arguments são todos os atributos de uma array
        soma  += arguments[i]//array interno
    }
    return soma
}
console.log|(soma())
console.log(soma (1.5, 8.9, 6.7))