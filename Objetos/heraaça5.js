function Aula(nome, videoId) {
    this.nome = nome
    this.videoId = videoId
}
const aula1 = new Aula('bem vindo', 123)
const aula2 = new Aula('até breve', 456)
console.log(aula1, aula2)

//tudo q é criado com operador new aponta pra função ao qual ela foi mencionada
//simulando o new
function novo(f, ...params)//... = array de parametros 
{
    const obj = {}
    obj.__proto__=f.prototype
    f.apply(obj,params)
    return obj
}
const aula3 = novo (Aula, 'bem vindo',123)
const aula4 = novo(Aula,'até breve',456)
console.log(aula3,aula4)