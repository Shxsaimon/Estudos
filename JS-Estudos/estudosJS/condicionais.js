var limiteVelocidade = 100; // Limite de velocidade em km/h

function verificarVelocidade() {
    var velocidade = Number(document.querySelector("#velocidade").value);
    
    if (velocidade > limiteVelocidade) {
        document.getElementById("mensagemvelocidade").innerText = `Você ultrapassou o limite de velocidade e será multado.`;
    } else {
        document.getElementById("mensagemvelocidade").innerText = "Você está dentro do limite de velocidade.";
    }
}
// Atualiza o texto do limite no HTML ao carregar a página
document.getElementById("limitevelocidade").innerText = `Limite de velocidade: ${limiteVelocidade} km/h`;

var idademinimavoto = 16; // Idade mínima para votar
var idademaximavoto = 65; // Idade máxima para voto obrigatório
function verificarIdade() {
    var idade = Number(document.querySelector("#idade").value);
    if (idade < idademinimavoto) {
        document.getElementById("mensagemidade").innerText = "Você não tem idade para votar.";
    } else if (idade >= idademinimavoto && idade < 18 || idade >= idademaximavoto) {
        document.getElementById("mensagemidade").innerText = "O voto é opcional para você.";
    } else {
        document.getElementById("mensagemidade").innerText = "O voto é obrigatório para você.";
    }
}
document.getElementById("idadevoto").innerText = `Idade mínima para votar: ${idademinimavoto} anos`;

function verificarData() {
    var data = new Date(document.querySelector("#data").value);
    var hoje = new Date();
    var diffDays = Math.floor((hoje - data) / (1000 * 60 * 60 * 24));
    switch (true) {
        case diffDays < 0:
            document.getElementById("mensagemdiasemana").innerText = "A data selecionada é no futuro.";
            break;
        case diffDays === 0:
            document.getElementById("mensagemdiasemana").innerText = "A data selecionada é hoje.";
            break;
        default:
            document.getElementById("mensagemdiasemana").innerText = `A data selecionada foi há ${diffDays} dias.`;
    }
}
