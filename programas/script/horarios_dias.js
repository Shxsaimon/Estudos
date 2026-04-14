var horaAtual = new Date; // Exemplo: 15 de junho de 2024 às 14:30
document.getElementById("horaatual").innerHTML = "Agora são " + horaAtual.getHours() + " horas";

if (horaAtual.getHours() < 12) {
    document.getElementById("horaatual").innerHTML += " da manhã.";
    document.body.style.background = "radial-gradient(circle,rgba(248, 255, 125, 1) 0%, rgba(255, 225, 77, 1) 50%, rgba(181, 140, 29, 1) 100%)";
    document.getElementById("imagemhora").src = "style/manha.jpg";
} else if (horaAtual.getHours() < 18) {
    document.getElementById("horaatual").innerHTML += " da tarde.";
    document.body.style.background = "radial-gradient(circle,rgba(255, 248, 117, 1) 7%, rgba(128, 189, 98, 1) 32%, rgba(27, 122, 23, 1) 74%)";
    document.getElementById("rodape-text").style.color = "white";
    document.getElementById("imagemhora").src = "style/tarde.jpg"; 
} else {
    document.getElementById("horaatual").innerHTML += " da noite.";
    document.body.style.background = "radial-gradient(circle,rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 56%, rgba(32, 0, 112, 1) 92%)";
    document.getElementById("rodape-text").style.color = "white";
    document.getElementById("imagemhora").src = "style/noite.jpg"; 
}
