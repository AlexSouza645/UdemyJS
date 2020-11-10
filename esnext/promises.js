function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {//função anonima do tipo arrow, funcao q sera chamadda qdo o promise for atendido )
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    }
    )
}
//promisse = processamento assincrono

falarDepoisDe(3, 'que legal!')
.then(frase=>frase.concat('?!'))
.then (outrafrase =>console.log(outrafrase))

//função de erro
.catch(e => console.log(e))