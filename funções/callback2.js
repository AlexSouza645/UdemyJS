//função filter

const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// sem calback
let notasBaixas = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])//push acrescenta um elemento em array
    }//cria uma array feito apenas com notas baixas

}
console.log(notasBaixas)

//com callback
const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})// filter filtra os resultados para aquilo q eu preciso
// apenas valores true é utilizado pelo filter
console.log(notasBaixas2)

//3º exemplo
const notasBaixas3 = notas.filter(notas => notas < 7)
console.log(notasBaixas3)
