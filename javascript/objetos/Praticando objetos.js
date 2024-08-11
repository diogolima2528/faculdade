function criarPessoa(nome,sobrenome,a,p){
    return {
        nome,
        sobrenome,
        peso: a,
        altura: p,
        calculoImc(){
            const indice = this.peso /(this.altura ** 2).toFixed(1)
            if (indice < 18.5){
            console.log("Você está abaixo do peso")

            } else if (indice => 18.5 && indice < 24.9){
            console.log("Você está com peso normal")

            } else if (indice => 25 && indice < 29.9){
            console.log("Você está acima do peso")
            
            }
        }
    }
}

var p1 = criarPessoa("Diogo","Lima",61,1.74);
p1.calculoImc()

