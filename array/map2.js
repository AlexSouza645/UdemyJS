const carrinho = [
    '{"nome": "Borracha", "preço":3.45}',//Json
    '{"nome": "caderno", "preço": 13.90}',
    '{"nome": "kit de lapis", "preço":41.22}',
    '{"nome":"caneta", "preço": 7.50}'
]
// retornar um array apenas com os preços
const paraObjeto = json => JSON.parse(json)//transforma string em objeto ou Json para objeto
const apenasPreco = produto => produto.preço
const resultado = carrinho.map(paraObjeto).map(apenasPreco)
    console.log(resultado)

    //1. transformar Json em string comum
    //2. criar uma função q pegue todos os valores de preços q vieram do Json
    //34. criar um Map para cada objeto de preço