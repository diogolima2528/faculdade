// primeira forma de criar objetos

const pessoa = {
    nome: "Diogo",
    sobrenome: "Lima"
}

console.log(pessoa["sobrenome"])

// segunda forma de criar objetos

const funcionário = new Object();
funcionário.nome = "Diego"
funcionário.sobrenome = "Souza"

console.log(funcionário.nome)

// forma utilizando função

function criarPessoa(nome,sobrenome, i){
    return {
        nome, 
        sobrenome,
        idade: i,
        nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        }
    
    }

}

const p1 = criarPessoa ("Gabriel","Araújo", 20)
const p2 = criarPessoa ("Vitor","Pereira", 21)

console.log(p1.nomeCompleto())
console.log(p2)



