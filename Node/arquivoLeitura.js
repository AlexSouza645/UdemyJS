const fs = require('fs')

const caminho= __dirname + '/arquivo.json'
//sincrono...
const conteudo = fs.readFileSync(caminho,'utf-8')//ler um arquivo de forma sincrona
console.log(conteudo)

//assincrono
fs.readFile(caminho,'utf-8',(err,conteudo)=>{
    const config= JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})


const config =require('./arquivo.json')
console.log(config.db)
//leitura de diretórios
fs.readdir(__dirname,(err,arquivos)=>{
    console.log('conteudo da pasta...')
    console.log(arquivos)
})

//__dirname é uma constante que esta presente em todos os módulos e arquivos do node