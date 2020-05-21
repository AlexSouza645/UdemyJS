function pessoa(nome) {
   
        this.nome = nome//usada p/ tornar a varável pública e não mais local
    
    this.falar = function(){//função q eu quero q seja exibida ao imprimir
        console.log(`meu nome é ${this.nome}`)
        //this é única forma de pegar nome do escopo local p/ ser usado globalmente 
    }}

const p1 = new pessoa ('joão')//variavel p/ armazenar o valor ou nome de um novo usuario
p1.falar()//variavel+função 