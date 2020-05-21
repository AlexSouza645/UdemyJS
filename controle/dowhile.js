function getInteiroAleatorio(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)

}

let opcao = 0
do {// faz enquanto não tem regra de falso ou verdadeiro
    opcao = getInteiroAleatorio(-1, 10)
    console.log(`Opção ewscolhida foi ${opcao}`)
} while (opcao != -1)
console.log('até a próxima')

// primeiro executa o bloco depois testa a função