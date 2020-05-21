const [a] = [10]
console.log(a)

const [n1, , n3, , n5 ,n6=0]= [10,7,9,8]
console.log (n1,n3,n5,n6)
// desestruturar é retirar elementos de uma array e atribuir valores a ela

const [,[,nota]] = [[,8,8], [9,6,8]]//ignora 1º array e o 1º elemento do 2º array
console.log(nota)