//com promises
const http = require('http')//modulo node

const getTurma = letra => {//recebe apenas 1 parametro
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {//get usar os dados recebidos
            let resultado = ''
            res.on('data', dados => {
                resultado += dados
            })
            res.on('end', () => {//evento q sera disparado
                try {
                    resolve(JSON.parse(resultado))
                } catch(e) {
                    reject(e)
                }
                }
        
                
        )

})
}

let nomes = []
getTurma('A', alunos => {//alunos q vieram da primeira requisicao
    // console.log(alunos[0].nome)
    nomes = nomes.concat(alunos.map(a => `A : ${a.nome}`))//map para extrair apenas os nomes
    console.log(nomes)
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(a => `B:${a.nome}`))
        console.log(nomes)
        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(a => `C:${a.nome}`))
            console.log(nomes)
        })

    })
})