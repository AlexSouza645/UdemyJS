//conceito de objeto: pares nome/valor
const saudacao = 'Opa'//contexto léxico 1

function exec (){
const saudacao = 'Falaaa'// contexto léxico 2
return saudacao
}

// Objetos são grupos de pares nome /valor
const cliente ={
nome : 'Pedro',
idade: 32,
peso: 90,
endereço: {
    logradouro : 'Rua muito legal',
    numero :132,
}

}
console.log(saudacao)
console.log(exec())
console.log(cliente)