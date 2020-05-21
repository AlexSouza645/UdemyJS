//Op. lógicos (if= se) verdadeiro e falso
//(ou )
//ou com verdadeiro sempre sera verdadeiro
//e com falso sempre será falso

// !v -> f
//!f = v

function compras (trabalho1, trabalho2) {
const comprarSorvete = trabalho1 || trabalho2// ( || pipe símbolo de ou)
const comprarTv50= trabalho1 && trabalho2// (&) e-comercial = e de junção
//const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor (ou exclusivo bit a bit )
const comprarTv32 = trabalho1 != trabalho2
const manterSaudavel = !comprarSorvete // operador unário
return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}
console.log(compras (true,true))
console.log(compras (true,false))
console.log(compras (false,true))
console.log(compras (false , false))