//ls
// node entradaSaida.js -a= 
const anonimo = process.argv.indexOf('-a') !== -1//retorna o index do array
//console.log(anonimo)

if(anonimo){
    process.stdout.write('fala anonimo!\n')//stdout saída padrão
    process.exit()
}else{
    process.stdout.write('informe o seu nome :')
    process.stdin.on('data,', data =>{
        const nome =data.toString().replace('\n', '')
        process.stdout.write(`fala ${nome }!!\n`)
        process.exit()
    })//stdin entrada padrão

}

