const pessoa = {
    nome: 'Rebeca',
    idade:2,
    peso:13
}
console.log(Object.keys(pessoa))//pegar as chaves de um objeto
console.log(Object.values(pessoa))//valores do objeto
console.log(Object.entries(pessoa))//entradas

Object.entries(pessoa).forEach(e=>{
  console.log(`${e[0]}: ${e[1]}`)  
})

Object.defineProperty(pessoa, 'dataNascimento',{
    enumerable:true,
    writable: false,
    value :'01/01/2019'
})
pessoa.dataNascimento='01/01/2017'
console.log(Object.keys(pessoa))
console.log(pessoa.dataNascimento)