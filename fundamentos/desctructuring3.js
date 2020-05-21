function rand({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)// floor pega o numero do maior ao menor// math usado para operações matematicas
}

const obj = { max: 50, min :40}
console.log(rand(obj))
console.log(rand({min:955}))

