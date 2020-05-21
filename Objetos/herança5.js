console.log(typeof String, typeof Array, typeof Object)// são funções
//string split
String.prototype.reverse = function(){
    return this.split('').reverse().join()// retorna cada letra de uma string numa array e reverte
}

console.log('escola cod3r'.reverse())

//Array.first
Array.prototype.first = function(){
    return this [0]
}
console.log(1,2,3,4,5, first())
console.log(['a','b','c','d'].first())

String.prototype.toString= function (){
    return ' lascou tudo'
}
console.log('escolacoder'.reverse())