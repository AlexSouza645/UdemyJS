//função callback(forEach)

const fabricantes= ['mercedes', 'audi', 'bmw']
function imprimir(nome , indice){
    console.log(`${indice +1}. ${nome}`)
}

fabricantes.forEach(imprimir)
/*primeiro vc chama a variável (fabricantes) ou array
depois vc chama a função(imprimir)*/
// callback é passar uma função e essa função ser disparada qdo ocorrer um evento