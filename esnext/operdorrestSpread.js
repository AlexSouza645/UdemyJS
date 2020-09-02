//operador  ...rest(juntar)/ spread (espalhar)
// usar rest com parametro de função
//tagged tempplate = capacidade de processar template string a partir de uma função

// usar spread com objeto
const funcionario = { nome: 'Maria', salario: 12348.99 }
const clone = { ativo: true, ...funcionario }// obj clone nao impacta na const funcionario

console.log(clone)

//usar spread com array
const grupoA = ['Joao', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', "rafaela", ...grupoA]// espalhar todos elementos de uma array em outra array
console.log(grupoFinal)