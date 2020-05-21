const soma = function (x,y){
    return x+y
}

const inprimirResultado = function (a,b,operacao=soma){
    console.log(operacao(a,b))
}
inprimirResultado(3,4)