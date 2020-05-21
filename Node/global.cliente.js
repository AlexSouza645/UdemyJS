require('./global')
console.log(global.MeuApp.saudacao())//global não precisa ser chamado

//outro modo
MeuApp.nome= 'Eita'
console.log(MeuApp.nome)

//para não permitir q minha global seja mudada eu uso o comando freeze