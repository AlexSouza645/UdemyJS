const escola = [{
    nome: 'Turma m1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome: 'ana',
        nota: 9.3
    }]

},{
    nome: 'turma m2',
    alunos:[{
        nome:'rebeca',
        nota:8.9

    },{
        nome:'Roberto',
        nota :7.3
    }]
}]

const getNotadoAluno = aluno =>aluno.nota
const getNotasDaTurma = turma=> turma.alunos.map(getNotadoAluno)
const notas= escola.map(getNotasDaTurma)
console.log(notas)
