function MeuObjeto() { }
console.log(MeuObjeto.prototype)//prototyoe é o pai do objeto/conceito de prototipo
//2 novos objetos criados a partir da mesma função construtora
//os protótipos apontam para o mesmo objeto
const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__)

//qdo vc cria um objeto a partir de uma função construtora new
//o prototipo do objeto aponta para a função q eu criei .prototype

MeuObjeto.prototype.nome = "anônimo"  //função.objeto.nome
// tudo oq vier a ser gerado a partir desas função const. vai herdar .nome
MeuObjeto.prototype.falar = function () {
    console.log(`Bom dia meu nome é ${this.nome}!`)
}
obj1.falar()//obj.função falar criada()
obj2.nome = 'rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'obj3'
obj3.falar()


//resumindo
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__)//nulo pq não tem nada acima de object.prototype

/* MeuObejto é uma função q tem um prototype qé MeuObjeto.prototype
MeuObjeto q é uma função, ele é um prototype ou filho de Function.prototype
MeuObjeto.prototype  q é filho de MeuObjeto, ele tem um atributo .nome .cor
tanto Function.prototype quatno Meu objeto e MEuObejeto.prototype são todos filhos ou 
prototype de Object.prototype
*/