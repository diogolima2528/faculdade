var números = [1,2,3,4,5,6,7,8,9,10]

var pares = números.filter(item => item % 2 == 0)

console.log(pares)

var númerosFiltrados = números.filter(
    function(valor){
        return valor > 5;
    }
);

console.log(númerosFiltrados)

function BuscarValores(valor){
    return valor < 5;
}

var númerosEncontrados = números.filter(BuscarValores)

console.log(númerosEncontrados)



var produtos = [
    {id: 1, descrição: "Celular", categoria: "eletrônico"},
    {id: 2, descrição: "Geladeira", categoria: "eletrodoméstico"},
    {id: 3, descrição: "Carro", categoria: "Veículo"},
    {id: 4, descrição: "Tablet", categoria: "eletrônico"},
    {id: 5, descrição: "Ipad", categoria: "eletrônico"}

]

var Eletrônicos = produtos.filter(
    function(valor){
        return valor.categoria == "eletrônico"
    }

)

console.log(Eletrônicos)