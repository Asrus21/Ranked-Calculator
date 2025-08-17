// CRIAÇÃO DE VARIÁVEIS
const prompt = require('prompt-sync')(); 

let dados = {
    nome: (prompt("Qual seu nome? ")),
    idade: Number(prompt("Qual sua idade? "))
};

// DECLARANDO VARIAVEIS
const nomes = ["Guerreiro", "Mago", "Monge", "Ninja"];
const ataques = ["usando espada", "usando magia", "usando artes marciais", "usando shurikens"];


function attack(atacante){
    return `o ${nomes[atacante]} ataca usando ${ataques[atacante]}!`;
}

const atacante = Number(prompt("Digite 0 para Guerreiro, 1 para Mago, 2 para Monge, 3 para Ninja! : "));

console.log(`O Herói chamado ${dados.nome} com ${dados.idade} anos, tem a classe de: ${nomes[atacante]}.`);
console.log(`${attack(atacante)}`)



