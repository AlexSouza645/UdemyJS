const pessoa = {
    saudacao: 'Bom dia',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar()// conflito entre paradigmas: funcional e OO

//bind = ligar
const falarDePessoa =  pessoa.falar.bind(pessoa)// bind liga o objeto direto com a função que foi chamada
falarDePessoa()