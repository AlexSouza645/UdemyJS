console.log(typeof Object)
console.log(typeof new Object())//type of new cria um objeto a partir da função

const Cliente = function() {}
console.log(typeof Cliente)//função
console.log(typeof new Cliente())//objeto

class Produto {}// classe em JS funciona como função
console.log(typeof Produto)//função
console.log (typeof new Produto)//objeto