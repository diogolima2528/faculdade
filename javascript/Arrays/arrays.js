var valores = [5,6,4,6,7];

console.log("Sequência do array: " + valores);

console.log("Array invertido: " + valores.reverse());

for (pos = 0 ; pos < valores.length; pos++){
    console.log("Posição = " + pos + " valores = " + valores[pos])

}





// calcular a média de todos os números de um array

var soma = 0
for (pos = 0; pos < valores.length; pos++) {
    soma += valores[pos]

}

var media = soma/valores.length

console.log(media);


var arr1 = [1,2,3,4,5,6,7];

console.log(arr1.join('  '))

var retirado = arr1.shift();

console.log(retirado)

console.log(arr1)

console.log("Posição do número 3: " + arr1.indexOf(3));

arr1.push(8);

console.log(arr1)

arr1.pop();

console.log(arr1)








// montar um array apenas com números positivos

var array5 = [3,5,-8,11,-14,-17,20];

var positivos = array5.filter(item => item > 0)

console.log(positivos)





// Encontrrar o Maior valor dentro de um array

var array5 = [3,5,-8,11,-14,-17,20]




// Retornar a cidade com a palavra maior dentro de um array



