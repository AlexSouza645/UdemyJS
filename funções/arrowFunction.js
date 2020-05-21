let dobro =  function (a){
    return 2 * a
}
// mudando essa função apra arrow function

dobro = (a)=> {
    return 2*a
}
dobro =a => 2*a// return implicito

console.log(dobro (Math.PI))

// arrow são funções escritas abreviadamente para deixar o código mai slimpo com menos informações