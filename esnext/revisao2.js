// arrow function
//função de uma única linha para reduzir o código
//sempre função anônima
const soma = (a, b) => a + b// return implícito a+b
console.log(soma(2, 3))

//arrow function this
const lexico1 = () => console.log(this===exports)
//this esta associado ao local em que ele foi excrito
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

//parametro default/ valor padrão
function log(texto = 'node') {
    console.log(texto)
}
log()

numeros.forEach(n=> total += n)// acrescenta um aditivo para cada elemento da array                                                                                                 
//operador rest ou spread
function total(...numeros){//=conjunto de numeros
    let total = 0// numeros como array
    return total
}
console.log(total(2,3,4,5))

//esse operador agrupa todos os parametros do tipo array                                                                                                                                                                                  
