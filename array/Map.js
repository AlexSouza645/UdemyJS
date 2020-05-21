const nums = [1,2,3,4,5]
//Map é For com propósito
let resultado = nums.map(function(e){
    return e*2
})
//até 3 elementos q retornam uma array mapeada da primeira array
//retorna um array do mesmo tamanho
console.log(resultado)

const soma10 =e =>e +10
    const triplo = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`
    resultado= nums.map(soma10).map(triplo)
    console.log(resultado)