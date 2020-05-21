const valor = 'global'
function minhaFuncao(){
    console.log(valor)
}

function exec(){
    const valor = 'local'
    minhaFuncao()
}
exec()
/*em Js a função acompanha o contexo em qual ela foi escrita de acordo 
em qual escopo ela foi escrita*/