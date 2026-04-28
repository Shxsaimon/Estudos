var mensagemWhile = document.getElementById("mensagemwhile");
var mensagemDoWhile = document.getElementById("mensagemdowhile");
var mensagemFor = document.getElementById("mensagemfor");

var execWhile = document.getElementById("execwhile");
var execDoWhile = document.getElementById("execdowhile");
var execFor = document.getElementById("execfor");

var max_fatias = 24;

function validarQuantidade(qtd) {
    if (qtd < 1 || isNaN(qtd)) {
        return { valido: false, mensagem: "Digite uma quantidade válida." };
    }
    if (qtd > max_fatias) {
        return { valido: false, mensagem: "O máximo permitido é " + max_fatias + " fatias." };
    }
    return { valido: true };
}

function atualizarExecucao(elemento, linhas) {
    elemento.textContent = linhas.join("\n");
}

function comerPizzaWhile() {
    var qtdWhile = Number(document.getElementById("qtdwhile").value);
    var validacao = validarQuantidade(qtdWhile);
    if (!validacao.valido) {
        mensagemWhile.textContent = validacao.mensagem;
        execWhile.textContent = "";
        return;
    }

    var contadorWhile = 0;
    var linhas = [
        "contador = 0",
        "while (contador < " + qtdWhile + ") {",
    ];
    atualizarExecucao(execWhile, linhas);

    function passo() {
        if (contadorWhile < qtdWhile) {
            contadorWhile++;
            linhas.push("  contador = " + contadorWhile);
            atualizarExecucao(execWhile, linhas);
            setTimeout(passo, 200);
        } else {
            linhas.push("}");
            atualizarExecucao(execWhile, linhas);
            mensagemWhile.textContent = "Você comeu " + contadorWhile + " fatias de pizza com o while!";
        }
    }

    passo();
}

function comerPizzaDoWhile() {
    var qtdDoWhile = Number(document.getElementById("qtddowhile").value);
    var validacao = validarQuantidade(qtdDoWhile);
    if (!validacao.valido) {
        mensagemDoWhile.textContent = validacao.mensagem;
        execDoWhile.textContent = "";
        return;
    }

    var contadorDoWhile = 0;
    var linhas = [
        "contador = 0",
        "do {",
    ];
    atualizarExecucao(execDoWhile, linhas);

    function passo() {
        contadorDoWhile++;
        linhas.push("  contador = " + contadorDoWhile);
        if (contadorDoWhile < qtdDoWhile) {
            linhas.push("  // repete porque contador < " + qtdDoWhile);
            atualizarExecucao(execDoWhile, linhas);
            setTimeout(passo, 200);
        } else {
            linhas.push("} while (contador < " + qtdDoWhile + ");");
            atualizarExecucao(execDoWhile, linhas);
            mensagemDoWhile.textContent = "Você comeu " + contadorDoWhile + " fatias de pizza com o do while!";
        }
    }

    passo();
}

function comerPizzaFor() {
    var qtdFor = Number(document.getElementById("qtdfor").value);
    var validacao = validarQuantidade(qtdFor);
    if (!validacao.valido) {
        mensagemFor.textContent = validacao.mensagem;
        execFor.textContent = "";
        return;
    }

    var contadorFor = 0;
    var linhas = [
        "for (contador = 0; contador < " + qtdFor + "; contador++) {",
    ];
    atualizarExecucao(execFor, linhas);

    function passo() {
        if (contadorFor < qtdFor) {
            contadorFor++;
            linhas.push("  contador = " + contadorFor);
            atualizarExecucao(execFor, linhas);
            setTimeout(passo, 200);
        } else {
            linhas.push("}");
            atualizarExecucao(execFor, linhas);
            mensagemFor.textContent = "Você comeu " + contadorFor + " fatias de pizza com o for!";
        }
    }

    passo();
}