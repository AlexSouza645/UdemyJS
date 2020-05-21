const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad Pro', preco:4199, fragil:true},
    {nome:'Copo de vidro', preco: 12.49,fragil:true},
    {nome:'Copo dePlastico', preco: 18.99,fragil:false}
]
console.log(produtos.filter(function(p){//filter é <= ao array original
  //  return p.preco >2500
  return p.preco>500
}

))
const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil
console.log(produtos.filter(caro).filter(fragil))

//Filter utilizado para usar elementos especificos de uma array