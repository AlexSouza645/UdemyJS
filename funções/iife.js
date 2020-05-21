//função q foge do escopo global 
// função auto-invocada
//immediately invoked function
//não nomeada
(function () {
    console.log('sera executado na hora')
    console.log('foge do escopo mais abrangente')
}


)
()//chama a function