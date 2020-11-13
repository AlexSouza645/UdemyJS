// assincrono para sincrono
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

//recurso do ES8
//objetivo de simplificar o uso de promises...
let obterAlunos = async () => {//async, await
    const ta = await getTurma('A')
    const tb = await getTurma('B')
    const tc = await getTurma('C')
    return [].concat(ta, tb, tc)// array com todas as turmas juntas
}// retorna um objeto AsyncFunction

obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))