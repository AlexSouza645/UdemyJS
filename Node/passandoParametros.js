module.exports = function (...nomes){//funcão como parametros variaveis
    return nomes.map (nome => `boa semana ${nome}`)
}
//em Node vc pode passar parâmetros de um módulo para outro