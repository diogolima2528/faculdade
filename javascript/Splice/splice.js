var arr2 = [1,2,3,4,5,6,7]

arr2.splice(4,3)

console.log(arr2)

var nomes = ["Maria","Joao","Lucas","Pedro"]

var novos = nomes.splice(2,1,"Luiz")

console.log(nomes)

var país = ["Brasil", "argentina", "Chile"];

país.unshift("uruguai")

console.log(país);

var pessoas = ["Diogo", "Jorge", "Fernanda", "Catarina"]
var gerentes = ["Davi", "Manuela"]
var pessoas1 = pessoas.slice(1,3)

console.log(pessoas)
console.log(pessoas1)

var empresa = pessoas.concat(gerentes)

console.log(empresa)


let array3 = ["Guilherme", "Manoel", "Samuel", "Davi", "João"]

array3.unshift("Mônica")

var novo3 = array3.splice(5,1)

var novo2 = array3.splice(1,1,"Emanoel")

console.log(array3)