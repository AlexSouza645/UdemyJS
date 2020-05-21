class pessoa {
    constructor(nome){
        this.nome = nome//usada p/ tornar a varável pública e não mais local
    }
    falar(){//função q eu quero q seja exibida ao imprimir
        console.log(`meu nome é ${this.nome}`)
        //this é única forma de pegar nome do escopo local p/ ser usado globalmente 
    }
}
const p1 = new pessoa ('joão')//variavel p/ armazenar o valor ou nome de um novo usuario
p1.falar()//variavel+função 

const criarPessoa = nome => {//nome é parametro dentro de função arrow(function(nome))
    return {
        falar:() => console.log(`meu nome é ${nome}`)
    }
}

const p2 = criarPessoa("maria")
p2.falar()
//1º vc cria uma const q tem um return
//dentro do return vc coloca uma function pra chamar essa primeira const
// depois vc cria um aconst baseada na 1ª const criada
//por fim vc pega a última const e adiciona a function como parametro (p2.falar())