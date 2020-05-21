function tratarErroELançar (erro) {
   // throw new Error ('ocorreu um erro no código')
   throw 10
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELançar(e)
    }finally {
        console.log ('final')
    }
    
}

const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)