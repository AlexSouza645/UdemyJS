Array.prototype.forEach2 = function (callback) {//p/ formar uma função ForEach primeiro eu acesso o prototype,
    for (let i = 0; i < this.length; i++){//depois declaro uma função callback dentro da formação de laço For
        callback(this[i],i,this)//por último eu chamo a função callback(valor atual, índice,parameto)
    }
}




const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']
aprovados.forEach2(function (nome, indice) {
    console.log(`${indice + 1} ${nome}`)//+1 é opcional
})
