const tecnologias = new Map()
tecnologias.set('react', {framework:false})
tecnologias.set ('angular', {framework:true})
//console.log(tecnologias.react)
console.log(tecnologias.get('react').framework)// get uisado p/ chamar o new map criado

//outra forma de criar map
const chavesVariadas = new Map([//array q vai criar outros arrays
     [function (){}, 'função'],
     [{}, 'objeto'],
     [123,'numero'],

])

chavesVariadas.forEach((vl, ch)=>{

    console.log(ch,vl)
})


console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)//funcao delete retorna verdadeiro ou falso
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)