const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {//arredonda numero para baixo
        case 10:
        case 9:
            console.log('quadro de honra')
            break// soluciona só 1 bloco e sai do switch
        case 7: case 8:
            console.log('aprovado')
            break// não esquecer
        case 5: case 6:
            console.log('recuperação')
    }
}



imprimirResultado(10)
imprimirResultado(7)
//switch > case > brake