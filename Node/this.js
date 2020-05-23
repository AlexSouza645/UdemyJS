console.log(this===global)
//this não é global pq ele aponta pra module.exports
console.log(this===module)

//exempplos verdadeiros
console.log(this===module.exports)
console.log(this===exports)

function logThis(){
    console.log('Dentro de uma função...')
    console.log(this===exports)
    console.log(this===module.exports)
    console.log(this===global)
    this.perigo
}

logThis()

//dentro de uma função This aponta para global
//diferentemente qdo ele esta fora da função
//this dentro da função torna aquele objeto global