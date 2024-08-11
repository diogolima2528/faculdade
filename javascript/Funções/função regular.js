function multiplicar (x,y){
    return x * y
}

var a = multiplicar(5,6)
console.log(a)

var b = multiplicar(9,8)
console.log(b)

function somaValores (a,b = 10,c = 12){
    return a + b + c
}

var c = somaValores(18,12,30)
console.log(c)

function subtraçãoValores (a,b,c){
    return a - b - c
}

var d = subtraçãoValores(16,2,4)
console.log(d)
