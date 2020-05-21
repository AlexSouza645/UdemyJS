//this acessa o elemento específico de um objeto
function f1(){console.log(this ===console)}
console.log(f1())

// this varia de acordo com quem chamou a função
// this é associado a função ao qual ele foi escrita