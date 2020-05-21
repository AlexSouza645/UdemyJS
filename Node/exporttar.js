console.log(module.exports===this)
console.log(module.exports===exports)

this.a=1
exports.b=2
module.exports.c=3
exports=null
console.log(module.exports)

//this e exports só apontam para o memo objeto q o module.exports aponta
//usar sempre module.exports
//npm init q eu acesso os atributos das pastas
//npm i isntala node modules no mesmo diretorio q eu estou utilizando