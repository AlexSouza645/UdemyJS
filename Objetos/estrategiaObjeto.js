//usando a notação literal de objeto
const obj1 = {}//{}é um objeto
console.log(obj1)

//Object em JS
console.log(typeof Object, typeof new Object)// object é uma funcção e newObject é um objeto
const obj2 = new Object
console.log(obj2)

//Obj em funções Construtoras
function Produto(nome, preco, desconto) {
    this.nome = nome// tornar o parametro nome global e nao mais local
    this.getPrecoComDesconto = () => {
        return preco * (1 - desconto)
    }
}
const p1 = new Produto('caneta', 7.99, 0.15)
const p2 = new Produto('NoteBook', 2988, 0.25)

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//Função factory(é um padrão de projeto)
function criarFuncionario (nome , salarioBase, faltas){
return {
    nome, 
    salarioBase,
    faltas,
    getSalario(){
        return (salarioBase/30)*(30-faltas)
    }
}
}
const f1 = criarFuncionario('joao', 7980,4)
const f2 = criarFuncionario('maria ', 11400, 1)

console.log(f1.getSalario(), f2.getSalario())

//Object.create
const filha = Object.create(null)
filha.nome= 'ana'
console.log(filha)

// uma função famosa q retorna Objeto...
const fromJSON = JSON.parse('{"info": "sou um JSON"}')
console.log(fromJSON.info)