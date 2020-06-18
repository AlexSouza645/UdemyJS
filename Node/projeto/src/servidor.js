const porta = 3003

const express = require('express')
const app = express()

//importar body -parser
const bodyParser = require('body-parser')

//importar funções exportadas pelo arquivo banco de dados

const bancoDeDados = require('../bancoDeDados')

/*app.get('/produtos', (req,res,next) =>{
    console.log('Middleware 1...')
    next()
})*/
app.use(bodyParser.urlencoded({ extended: true }))//retorno dela é uma função middleware
app.get('/produtos', (req, res, next) => {//get é  uma forma de requisição
    res.send(bancoDeDados.getProdutos())//send envia uma resposta objeto
    //converte automaticamente para json
})// existem requisições get , post, put , delete , copy

//nova url
app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))// passar o param q eu recebi (id)
})
//get= pedir requisição//

//para submeter os dados e salvar um novo produto
//salvar um produto no banco de dados
app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)//json
})



app.listen(porta, () => {
    console.log(`servidor executando na porta ${porta} entendeu `)
})
//O put atualiza o recurso como um todo enquanto patch atualizaria parcialmente