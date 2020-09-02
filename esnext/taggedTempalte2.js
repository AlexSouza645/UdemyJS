//controlar o parse de uma template string
function real (partes, ...valores){
const resultado =[]
valores.forEach((valor, indice) =>{
    valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`//em cima dos valores aplicar as moedas
    //se nao for numerico retorna um valor e aplica uma mascara em template string
    //to fixed(2)= 2 casas decimais
    resultado.push(partes[indice],valor)//acrescenta novos elementos numa array/ reconstruir  a string de forma correta
})
return resultado.join('')//junta todas as partes de uma template num array
}
const preco = 29.99
const precoParcela = 11
console.log (real `1x de ${preco} ou 3x de ${precoParcela}`)

