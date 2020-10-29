//naõ aceita repetição/ não indexeda/ 
const times = new Set()
times.add ('VAsco')
times.add ('São Paulo').add('palmeiras').add('corinthians')// posso encadear
times.add('flamengo')
times.add('vasco')

console.log(times)
console.log(times.size)//pra ver o tamanho do set = 6
console.log(times.has('vasco'))//boolean , falso ou  verdadeiro

// excluir um elemento dentro do set
times.delete('flamengo')
console.log(times.has('flamengo'))//falso

const nomes = ['raquel', 'lucas', 'julia', 'lucas']
const nomesSet= new Set (nomes)
console.log((nomesSet))