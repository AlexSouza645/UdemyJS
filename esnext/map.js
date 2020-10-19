const tecnologias = new Map()
tecnologias.set('react', {framework:false})
tecnologias.set ('angular', {framework:true})
//console.log(tecnologias.react)
console.log(tecnologias.get('react').framework)// get usado p/ chamar o new map criado

//outra forma de criar map
const chavesVariadas = new Map([//array q vai criar outros arrays
     [function (){}, 'função'],//chave , valor
     [{}, 'objeto'],//chave literal 
     [123,'numero'],//objeto numerico
])

chavesVariadas.forEach((vl, ch)=>{

    console.log(ch,vl)
})


console.log(chavesVariadas.has(123))//diz se o elemento esta ou não contido no map/ boolean
chavesVariadas.delete(123)//funcao delete retorna verdadeiro ou falso dentro do map
console.log(chavesVariadas.has(123))// q se tornou falso
console.log(chavesVariadas.size)//qtos elementos estao no map
//map nao aceita repetiçao
//apenas chaves se repetem em map

chavesVariadas.set (123, 'a')
chavesVariadas.set(123, 'b')
console.log(chavesVariadas)