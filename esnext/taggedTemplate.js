 //tagged templates processa o template dentro de uma função
 function tag (partes, ...valores){//2 arrays com diferentes valores
     console.log(partes)
     console.log(valores)
     return 'outra string'
 }
 const aluno = 'gui'
 const situacao = 'aprovado'
 console.log( tag `${aluno} esta ${situacao}.`)//tag nao precisa de () pra chamada de funca exatamente por ser uma tagged template
 //sera mostrado no console 2 arrays, 1 de partes outra de valores