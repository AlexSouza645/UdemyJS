function soBoaNoticia (nota) {
    if (nota >= 7) {  // (if) se for verdade
        console.log('aprovado com ' + nota)
    }
}
soBoaNoticia (8.1)
soBoaNoticia (6.1)

function seForVerdadeEuFalo(valor){
    if (valor){
        console.log('É verdade...' + valor)
    }
}
seForVerdadeEuFalo()//falso
seForVerdadeEuFalo(null)//falso
seForVerdadeEuFalo(-1)//verdade

//if só imprimirá se o valor x for verdadeiro