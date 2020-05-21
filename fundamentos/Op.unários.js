// operadores infix são os q ficam entre os operadores



let num1 = 1
let num2 = 2

num1++ //operadores pós fixadas
console.log(num1)
--num1 //operadores préfixados
console.log(num1)

console.log(++num1 === num2--)/*
1º é execuatado o código q tem precedência (++num1) e o compara === com o num2
logo após isso [é q sera executado o (--)
*/
console.log(num1 === num2)