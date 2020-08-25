//ES8 Object.value/ object.entries
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj))//array com valores
console.log(Object.entries(obj))//matriz = array de array chave , valor

//melhorias na notação literal de objetos
//facilidade de criar objetos
const nome = 'Carla'
const pessoa = {
    nome,//objeto
    ola() {//ola: function(){}
        return 'OI gente'
    }

}
console.log(pessoa.nome, pessoa.ola())

//classe internamente vai ser convertida em uma função
class animal {}
class cachorro extends animal{// extends= herança em classes
    falar(){
        return 'au au'
    }
}
console.log(new cachorro().falar())