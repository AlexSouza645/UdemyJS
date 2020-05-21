const aprovados=['Agatha', 'Aldo', 'Daniel', 'Raquel']
aprovados.forEach(function(nome, indice){
    console.log(`${indice+1} ${nome}`)//+1 é opcional
}


)
aprovados.forEach(nome => console.log(nome))

//guardar a função numa const
const exibirAprovados= aprovados => console.log(aprovados)
aprovados.forEach(exibirAprovados)

//foreach = para cada
//for Each  aceita até 3 parametros no máximo na função callbck
//nome , índice, array