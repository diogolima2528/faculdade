var Adição = (a,b,c) =>{
    return a + b + c
}

console.log(Adição(5,10,15))

var Multiplicação = (x,y,z) =>{
    return x * y * z
}

console.log(Multiplicação(3,6,5))

var Subtração = (z,x,c) =>{
    return z - x - c
}

console.log(Subtração(30,10,10))

var números = [1,2,3,4,5]
var valores = números.map((num) => num * num)

console.log(valores)


var listaProdutos = ["geladeira", "fogão", "mesa"];
var listaEmMaiusculo = listaProdutos.map((elemento) => elemento.charAt(0).toUpperCase() + elemento.slice(1));




console.log(listaEmMaiusculo)

