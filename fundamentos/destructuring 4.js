function rand ([min = 0, max = 1000]) {
if (min > max) [min, max] =[max ,min]// se min > max = destructuring max para min 
 const valor = Math.random() * (max-min) + min
 return Math.floor (valor)// floor retorna o valor mínimo
}

//testes
console.log (rand ([50,40]))
console.log(rand([992]))
console.log(rand ([,10]))