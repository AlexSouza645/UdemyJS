const escola= 'cod3r'
console.log(escola.charCodeAt(3)) //acha o índice correspondente
console.log(escola.charAt(3)) 
console.log(escola.indexOf('3')) 
console.log(escola.substring(0,3)) 
//concatenar string
console.log('Escola '.concat(escola).concat('!'))
console.log(escola.replace(3,'e'))//para substituir letras
//template string
const nome ='rebeca'
const template = `olá ${nome}`
console.log(template)