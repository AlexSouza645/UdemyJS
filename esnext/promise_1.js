let  a=1
console.log(a)
//promise é uma promessa de dado q serta gerado no futuro
let p = new Promise(function(cumprirPromessa){
    cumprirPromessa(3)
})
//console.log(typeof Promise)

//console.log(typeof p)
p.then(function(valor){//then qdo for cumprido
console.log(valor)
})