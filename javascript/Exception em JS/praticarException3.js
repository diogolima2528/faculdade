 function checkPositive(números){
    if(!Array.isArray(números)){
        throw new Error("O argumento deve ser um array")
    }
 

 const allPositive = números.every((num) => num > 0);
if(!allPositive){
    throw new Error("O Array deve conter apenas números positivos");
}
return true;

}

try{
    const numbers = [1,2,3,4,5,6-6]

    const isPositive = checkPositive(numbers)

    console.log(isPositive)


}catch(error){
    console.log("Ocorreu um erro ", error.message)
}