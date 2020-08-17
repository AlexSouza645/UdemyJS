// arrow function
//função de uma única linha para reduzir o código
//sempre função anônima
const soma = (a, b) => a + b// return implícito a+b
console.log(soma(2, 3))

//arrow function this
const lexico1 = () => console.log(this===exports)
//this esta associado ao local em que ele foi escrito
const lexico2 = lexico1.bind({})// bind aponta para 1 objeto
lexico1()//aponta p/ this
lexico2()//aponta p/ exports
//this aponta p/ globo

//parametro default/ valor padrão
function log(texto = 'node') {
    console.log(texto)
}
log()


//operador rest ou spread
function total(...numeros){//=conjunto de numeros
    let total = 0// numeros como array
    
    numeros.forEach(n=> total += n)// acrescenta um aditivo para cada elemento da array                                                                                                 
return total
}
console.log(total(2,3,4,5))

//esse operador agrupa todos os parametros do tipo array                                                                                                                                                                                  
