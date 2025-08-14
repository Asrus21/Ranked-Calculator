const prompt = require("prompt-sync")();

let tipo = prompt("Escolha o tipo (Guerreiro, Mago, Monge, Ninja): ");
let idade = prompt("Idade: ");
let nome = prompt("Nome: ");


function attack (tipo) {
    switch (tipo) {
        case "Guerreiro":
            return "usou espada";
        case "Mago":
            return "usou magia";
        case "Monge":
            return "usou artes marciais";
        case "Ninja":
            return "usou shuriken";
    }
}

console.log(attack(tipo));