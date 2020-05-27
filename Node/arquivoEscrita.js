 const fs = require('fs')

 const produto= {
     nome:'celular',
     preco:1249.00,
     desconto:0.15
 }
 //como escrever arquivos em Json no node
 fs.writeFile(__dirname +'/arquivoGerado.json', JSON.stringify(produto),err=>{
     console.log(err ||'arquivo salvo')
 })
 //(dirname )= diretorio name= nome do diretório q eu quero gerar

 /*const fs.(writefile=escreverArquivo(__dirname + '/arquivogerado.json'=nome dop arquivo q eu quero escrever)
 depois eu transformo ersse obejto em json atraves do
 stringfy(produto),
 depoois eu chamo uma callback esclusiva caso aenas apareça um erro
 err=>{
     console.log(err ||'arquivo salvo')
 
*/
