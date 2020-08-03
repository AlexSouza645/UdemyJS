//let e const
//let tem escopo de bloco


//template string
//`${}`
const produto = 'ipad'
console.log(`${produto} é caro`) 

//destructuring= desistruturar 
const[l,e,...tras]= 'coder'//operador rest ...tras
console.log(l,e,tras)

//desestruturar uma array
const [x,y]=[1,2,3]
console.log(x,y)

//desestruturar um objeto
const {idade, nome}= {nome:'ana', idade:9}
console.log(nome, idade)