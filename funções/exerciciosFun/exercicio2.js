function classificarTriangulo (lado1, lado2, lado3) {
    if (lado1==lado2 && lado2==lado3)
    return 'equilatero'
    else if (lado1==lado2 || lado2 ==lado3|| lado3 == lado1){   return 'isósceles'}
 
    else
    return 'escaleno'

}

console.log(classificarTriangulo(2,2,2))
console.log(classificarTriangulo(2,2,3))
console.log(classificarTriangulo(2,3,4))