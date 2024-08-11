var shoppingCart = [];

function addItemToCart(item){
    shoppingCart.push(item)
}

function removeItemFromCart(item){
    const index = shoppingCart.indexOf(item)
    if (index !== -1){
        shoppingCart.splice(index,1)
    }
}

function viewCart(){
    if(shoppingCart.length == 0)
    console.log("Your Shopping Cart is empty")
    else{
        console.log("There are itens in your Shopping Cart: ")
        for(let i = 0; i < shoppingCart.length; i++){
            console.log(`${i + 1} - ${shoppingCart[i]}`)
        }
    }
}

function clearCart(){
    shoppingCart.length = 0;
    console.log("Your Shopping Cart has been cleared")
}

addItemToCart ("Socket")
addItemToCart ("Shoes")
addItemToCart ("Short")
addItemToCart ("Socket")

viewCart()

removeItemFromCart("Shoes")

viewCart()

clearCart()

viewCart()
