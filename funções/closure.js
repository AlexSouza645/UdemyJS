//Closure é o escopo criado qdo uma função é declarada
// Esse escopo permite a função acessar e manipular as variáveis externas a função
//closure = ligar

//contexto léxico em ação
const x = 'global'
function fora (){
    const x = 'local'
    function dentro (){
        return x
    }
    return dentro
    
}
const minhaFuncao = fora()
console.log(minhaFuncao())