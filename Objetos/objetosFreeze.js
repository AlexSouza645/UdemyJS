//pessoa -> 123 -> {...}
const pessoa = Object.freeze( {nome:'joão'})
pessoa.nome= 'pedro'
console.log(pessoa)

//const sempre aponta para o objeto q ela foi criada, ela não muda
//cons só pode ser atribuido um valor uma única vez

Object.freeze(pessoa)//congelar atributo de uma const
//freeze congela um objeto para que se torne const