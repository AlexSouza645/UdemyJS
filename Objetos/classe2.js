class avo {
    constructor(sobrenome){
        this.sobrenome=sobrenome
    }
}

class pai extends avo {// classe criada a apartir da classe avo
constructor (sobrenome, profissao = 'professor'){
    super(sobrenome)// forma de chamar a função construtora de avo
    this.profissao = profissao
}

}

class Filho extends pai{
    constructor(){
        super('silva')
    }
}
const filho = new Filho
console.log(filho)