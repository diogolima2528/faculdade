class dispositivoEletrônico{
    constructor(nome){
        this.nome = nome
        this.ligado = false
    }

    ligar(){
        if (this.ligado){
            console.log("Já está ligado")
            return
        }
        this.ligado = true
    }
}

class smartPhone extends dispositivoEletrônico{
    constructor(nome, cor, modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }

}


var s1 = new smartPhone("Samsung", "Azul", "A23");
console.log(s1)
s1.ligar()
s1.ligar()