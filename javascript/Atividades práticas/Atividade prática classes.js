class Funcionários{
    constructor(nome, idade, cargo){
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar(){
        console.log(`Olá, sou ${this.nome}, tenho ${this.idade} anos e atuo como ${this.cargo}`);
     };
    
    trabalhar(){
        console.log(`${this.nome} está trabalhando em suas tarefas como ${this.cargo} no momento`);
    }    
}


class Gerente extends Funcionários{
    constructor(nome,idade,cargo, departamento){
        super(nome,idade,cargo);
        this.departamento = departamento;

    }


seApresentar(){
    console.log(`Olá, sou ${this.nome}, tenho ${this.idade} anos, atuo como ${this.cargo} e sou do departamento de ${this.departamento}`);

 };

gerenciar(){
    console.log(`${this.nome} está gerenciando o departamento de ${this.departamento}`);
}

}

class Desenvolvedor extends Funcionários{
    constructor(nome,idade,cargo,linguagem){
        super(nome,idade,cargo);
        this.linguagem = linguagem;

    }


seApresentar(){
    console.log(`Olá, sou ${this.nome}, tenho ${this.idade} anos, atuo como ${this.cargo} e programo na linguagem ${this.linguagem}`);

 };

programar(){
    console.log(`${this.nome} está programando na linguagem de ${this.linguagem}`);
}

}

var Gerente_Novo = new Gerente("Diogo",22,"Gerente","Logística")
Gerente_Novo.seApresentar()
Gerente_Novo.trabalhar()
Gerente_Novo.gerenciar()



var Desenvolvedor_Novo = new Desenvolvedor("Diego",25,"Desenvolvedor","JavaScript")
Desenvolvedor_Novo.seApresentar()
Desenvolvedor_Novo.trabalhar()
Desenvolvedor_Novo.programar()


