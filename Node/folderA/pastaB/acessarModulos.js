const moduloA= require('../../moduloA')//para acessar uma pasta anterior (../)
console.log(moduloA.bemVindo)

const http = require('http')
http.createServer((req, res)=>{
    res.write('Bom dia')
    res.end()
}).listen (8080)