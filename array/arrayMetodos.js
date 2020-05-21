//Método Pop em Arrays
const pilotos = ['Vettel', 'Alonso', 'raikkonen', 'Massa']
pilotos.pop()//remove o último elemento e retorna o valor obtido
console.log(pilotos)

//metodo Push
pilotos.push('Verstasppen')// adiciona um novo elemento na ultima posição da array
console.log(pilotos)

//metodo shift
pilotos.shift()//remove o primeiro elemento da array
console.log(pilotos)

//metodo unshift
pilotos.unshift('Hamilton')
console.log(pilotos)

//metodo splice
//pode adicionar ou remover elementos
//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1)//(B PARTIR DO INDICE 3 eu removo 1 elemento)
console.log(pilotos)


//metodo slice
const algunsPilotos = pilotos.slice(2)// novo array a partir do indice 2
console.log(algunsPilotos)

const algunsPilotos2  = pilotos.slice(1,4)//comceça no indice 1 até o 4 mas imprime ate o 3
console.log(algunsPilotos2)