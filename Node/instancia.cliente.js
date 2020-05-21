const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()//usado para invocar a função factory
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorD.valor, contadorC.valor)

//Instancia Única compartilham um mesmo Objeto

//Instancia Nova instanciam seus Objetos, não compartilham o mesmo Objeto

