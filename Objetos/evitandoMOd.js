// Object.preventExtensions
const produto = Object.preventExtensions({
    nome :'qualquer', preco: 1.99, tag : 'promoção'//name, number, tag string
})
console.log('extensivel', Object.isExtensible(produto))
produto.nome='borracha'
produto.descricao= 'borrachaescolar branca'
delete produto.tag
console.log(produto)

// nesse objeto pode ser excluído parametros e não adicionados


//Object.Seal(selar)
const pessoa = { nome:'Juliana', idade: 35}
Object.seal(pessoa)
//não é possível nem excluir nem deletar atributos apenas mexer nos atributos ja criados
console.log('selado', Object.isSealed(pessoa))

pessoa.sobrenome = 'silva'//não permitido
pessoa.idade = 29
console.log(pessoa)

//Object.freeze = selado(object.seal) +valores constantes
