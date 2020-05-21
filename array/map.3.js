Array.prototype.map2 = function(callback){
    const newArray= []
    for (let i=0;i< this.length;i++){
        newArray.push(callback(this[i],i,this))//precisa ser criada a novo array

    }
    return newArray
}

const carrinho = [
    '{"nome": "Borracha", "preço":3.45}',//Json
    '{"nome": "caderno", "preço": 13.90}',
    '{"nome": "kit de lapis", "preço":41.22}',
    '{"nome":"caneta", "preço": 7.50}'
]
// retornar um array apenas com os preços
const paraObjeto = json => JSON.parse(json)//transforma string em objeto ou Json para objeto
const apenasPreco = produto => produto.preço
const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
    console.log(resultado)