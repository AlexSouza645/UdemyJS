console.log(Math.ceil(6.1))// ceil arredonda pra cima o valor// Math = object

const obj1 = {}
obj1.nome = 'bola'//atribui valores para variáveis declaradas porem vazias
//obj1 ['nome']= 'bola2'
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome //this torna função ou objeto público globalmente
    this.exec = function(){
        console.log('exec...')
    }
}

const obj2 = new Obj('cadeira')
const obj3 = new Obj('mesa')
console.log (obj2.nome)
console.log(obj3.nome)
obj3.exec()