class lancamento {
    constructor(nome = 'generico', valor = 0) {
        //desconstruindo
        this.nome = nome
        this.valor = valor//adicionando um novo atributo
    }

}
class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }
    addLancamentos(...lancamentos) {//...simbolo de array
        lancamentos.forEach(l => this.lancamentos.push(l))
    }
    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new lancamento('salario', 45000)
const contadeLuz = new lancamento('luz', -220)
const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contadeLuz)
console.log(contas.sumario())