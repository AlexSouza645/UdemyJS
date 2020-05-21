//get - pegar, set - selecionar
const sequencia = {
    _valor:1, // convenção
    get valor(){return this._valor++},
    set valor(valor){
        if (valor > this._valor){
            this._valor=valor
        }
    
    }
}
//como chamar o get e o set no console
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)