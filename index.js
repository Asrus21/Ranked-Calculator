let tipo = ["Guerreiro", "Mago", "Monge", "Ninja"];
let idade;
let nome;

function attack (tipo) {
    if (tipo === "Guerreiro") {
        return "usou espada";
    } else if (tipo === "Mago") {
        return "usou magia";
    } else if (tipo === "Monge") {
        return "usou artes marciais";
    } else if (tipo === "Ninja") {
        return "usou shuriken";
    }
}

console.log(attack)