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
                } catch (e) {
                    reject(e)
                }
            }
            )

        })
    }
    )
}

let nomes = []
getTurma('A').then(alunos => {//alunos q vieram da primeira requisicao
    // console.log(alunos[0].nome)
    nomes = nomes.concat(alunos.map(a => `A : ${a.nome}`))//map para extrair apenas os nomes

    getTurma('B').then(alunos => {
        nomes = nomes.concat(alunos.map(a => `B:${a.nome}`))

        getTurma('C').then(alunos => {
            nomes = nomes.concat(alunos.map(a => `C:${a.nome}`))
            console.log(nomes)
        })

    })
})

Promise.all([getTurma('A'),getTurma('B'),getTurma('C')])// é esperado todas as promisses ou reject serem realizadas

.then(turmas => [].concat(...turmas))
.then (x => console.log(x))//todos os elementos num unico array
.then (alunos => alunos.map(aluno => aluno.nome))
.then(nomes => console.log(nomes))
//sempre colocar função catch para evenntuais erros
.catch(e => console.log(e.message))

//teste
getTurma("D").catch(e => console.log(e.message))