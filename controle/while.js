function getInteiroAleatorioEntre(min,max) {
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

let opcao = 0
while(opcao != -1)//enquanto for verdadeiro 
{
    opcao = getInteiroAleatorioEntre(-1,10)
    console.log(`Opção escolhida foi ${opcao}.`)
}
console.log('Até a próxima')
//enquanto for -1 ele continua 

//achando o -1 ele sai do laço
//while  é usao em quantidade indeterminada de repetições
