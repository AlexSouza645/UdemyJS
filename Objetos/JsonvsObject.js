// Json é um formato de dados
//interoperabilidade de sistemas
//facilidade em migração de dados entre sistemas
const obj = {a:1, b:2,c:3, soma (){return a+b+c}}
console.log(JSON.stringify(obj))//converte um valor em JS para Json

//Json são dados não funções
//console.log(JSON.parse("{a:1, b:2,c:3}"))//parse transforma Json em object de Js
//console.log(JSO0N.parse("{'a':1,'b':2},'c':3")) tb não transforma Json em object
//Json tem q ser delimitado por aspas duplas ""
console.log(JSON.parse('{"a":1,"b":2, "c":3}'))//primeiro aspas simples e os atributos em aspas duplas
console.log(JSON.parse('{"a":1, "b":"string","c": true, "d":{},"e":[]}'))// Json p/ objeto,p/ string, p/booleano,p/ objeto, p/ array


/*const objeto = JSON.parse('{ "gabinete": 300.00,"Placa De Vídeo": 1500.00,"Processador": 1250.00, "Monitor": 1650.00, "Teclado": 230.00, "MousePad": 50.00, "Mouse": 75.00}')
let total = 0
for (item in objeto) {
    total += objeto[item]
}
 
console.log(total);*/