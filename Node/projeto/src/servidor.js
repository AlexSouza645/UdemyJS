const porta = 3003

const express = require('express')
const app = express()

app.get('/produtos', (req,res,next) =>{
    res.send({nome:'notebook', preco:123.45})//send envia uma resposta objeto
    //converte automaticamente para json
})

app.listen(porta, ()=>{
    console.log(`servidor executando na porta ${ porta} entendeu rsrs`)
})