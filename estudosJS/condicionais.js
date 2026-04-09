var limiteVelocidade = 100; // Limite de velocidade em km/h

function verificarVelocidade() {
    var velocidade = Number(document.querySelector("#velocidade").value);
    
    if (velocidade > limiteVelocidade) {
        alert(`Você ultrapassou o limite de velocidade! Você será multado. Velocidade registrada: ${velocidade} km/h`);
    } else {
        alert("Você está dentro do limite de velocidade.");
    }
}

// Atualiza o texto do limite no HTML ao carregar a página
document.getElementById("limitevelocidade").innerText = `Limite de velocidade: ${limiteVelocidade} km/h`;