//array é um objeto em JS
console.log(typeof Array, typeof new Array, typeof [])
//em array é sempre melhor ser trabalhado dados homogêneos 
//ou dados q tem relação qto ao tipo

let aprovados= new Array('bia' ,'Ana','Pedro')
console.log(aprovados)
//notação literal de array
aprovados= ['Bia ', 'Ana ', 'Pedro']
console.log(aprovados[0])

//adicionar um novo elemento em uma array
aprovados[3] = 'Paulo'
aprovados.push('Aline')//adicionar um novo elemento
console.log(aprovados.length)//length quantidade de elementos 

aprovados[9]= 'Rafael'
console.log(aprovados[8]===undefined)