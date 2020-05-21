const notas = [6.7, 7.4, 9.8, 7.7,]
for (i in notas){
    console.log(i, notas[i])
}

const pessoa ={
    nome:'ana',
    sobrenome: 'silva',
    idade:29,
    peso:64
}

for (atributo in pessoa){//atributo de um objeto
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

//for in percorre todos os atributos de um objeto, constante ou array