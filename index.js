const prompt = require("prompt-sync")();

let tipo = prompt("Escolha o tipo (Guerreiro, Mago, Monge, Ninja): ");
let idade = prompt("Idade: ");
let nome = prompt("Nome: ");


function attack (tipo) {
    switch (tipo) {
        case "Guerreiro":
            return "usando espada";
        case "Mago":
            return "usando magia";
        case "Monge":
            return "usando artes marciais";
        case "Ninja":
            return "usando shuriken";
        case "guerreiro":
            return "usando espada";
        case "mago":
            return "usando magia";
        case "monge":
            return "usando artes marciais";
        case "ninja":
            return "usando shuriken";
    }
}
[
    
]

console.log(`o ${tipo} chamado ${nome} atacou ${attack(tipo)}`)