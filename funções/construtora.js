function Carro(velocidadeMaxima = 200, delta = 5) {
    //atributo privado
    let VelocidadeAtual = 0

    //metodo publico
    this.acelerar = function () {//função p/ medir velocidade
        if (VelocidadeAtual + delta <= velocidadeMaxima) {
            VelocidadeAtual += delta
        } else {
            VelocidadeAtual = velocidadeMaxima
        }
    }

    //metodo publico
    //this => função construtora
    this.getVelocidadeAtual = function () {
        return VelocidadeAtual
    }

}


const uno = new Carro()
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())