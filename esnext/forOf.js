//for of opera em cima de valores
for (let letra of 'cod3r') {
    console.log(letra)
}

//for in opera em cima de indices
const assuntosEcma = ['map', 'set', 'promise']
for (let i in assuntosEcma) {
    console.log(i)
}

for (let assunto of assuntosEcma) {
    console.log(assunto)


}
//criando map
const assuntosMap = new Map([
    ['map', { abordado: true }],
    ['set', { abordado: true }],
    ['promise', { abordado: false }]
])
//forma para receber a chave e o valor
for (let assunto of assuntosMap) {
    console.log(assunto)
}

//percorrer só a chave ou só o valor
for (let chave of assuntosMap.keys()) {
    console.log(chave)
}

for (let valor of assuntosEcma.values()) {
    console.log(valor)
}

// for of percorre os elementos