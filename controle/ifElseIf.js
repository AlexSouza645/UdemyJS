Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
  if (nota.entre(9, 10)) {
        console.log('Quadro de Honra')
    } else if (nota.entre(7, 8.99)) {
        console.log('aprovado')
    } else if (nota.entre(4, 6.99)) {
        console.log('recuperação')
    } else if (nota.entre(0, 3.99)){
        console.log('reprovado')
    }else {
        console.log('nota inválida')
    }


}
  

    


imprimirResultado(9)
imprimirResultado(7)
imprimirResultado(6)
imprimirResultado(2)
imprimirResultado(-2)