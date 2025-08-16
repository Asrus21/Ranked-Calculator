// CRIAÇÃO DE VARIÁVEIS
const prompt = require('prompt-sync')(); 

let dados = {
    name: "Asrus",
    idade: 15,
    tipo: {
        0: ["Guerreiro"],
        1: ["Mago"],
        2: ["Monge"],
        3: ["Ninja"]
    }
};

// TESTANDO O FOR LOOP
for(let i in dados.tipo){
    let [nomesMaiusculos, nomesMinusculos] = dados.tipo[i];
}

// MENSAGEM DE ATAQUE UTILIZANDO ESTRUTURA JSON

function attack (tipo) {
    const ataques = {
        0: "usando espada",
        1: "usando magia",
        2: "usando artes marciais",
        3: "usando shuriken"
    };
    return ataques(tipo[select]) || "classe desconhecida";
};


//FRASE FINAL
const select = parseInt(prompt("Tipo 0: Guerreiro, 1: Mago, 2: Monge, 3: Ninja. O seu tipo é: "));
console.log(`O ${dados.tipo[select]} atacou ${attack(tipo)}`);

