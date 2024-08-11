var valor = Café;
// O valor atribuído vai depender da bebida escolhida

switch(valor){

    case "Café":
        console.log("Sua escolha foi café, o valor a ser pago é de R$ 3,00!");
        break;
    case "Leite":
        console.log("Sua escolha foi leite, o valor a ser pago é de R$ 4,00!");
        break;
    case "Chá":
        console.log("Sua escolha foi chá, o valor a ser pago é de R$ 6,00!");
        break;
    default:
        console.log("A escolha de bebida deve ser feita entre: Café, Leite ou Chá.")
}
