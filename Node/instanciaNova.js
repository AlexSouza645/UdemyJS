//uma factory retorna um novo objeto
module.exports = ()=>{
    return {
        valor:1,
        inc(){
            this.valor++
        }
    }
}//Instancia Nova instanciam seus Objetos, não compartilham o mesmo Objeto