function atualizarExecucao(elemento, linhas) {
    elemento.textContent = linhas.join("\n");
}

var timeoutId = null; // Variável para armazenar o ID do timeout atual

function contarComPasso() {
    var inicio = Number(document.getElementById('numinicio').value);
    var fim = Number(document.getElementById('numfim').value);
    var numpasso = Number(document.getElementById('passo').value);
    var exec = document.getElementById('execcontador');
    
    if (isNaN(inicio) || isNaN(fim) || isNaN(numpasso)) {
        window.alert('Por favor, preencha todos os campos com números válidos.');
        return;
    }
    
    if (numpasso === 0) {
        window.alert('O passo não pode ser zero.');
        return;
    }
    
    // Cancelar a execução anterior se existir
    if (timeoutId !== null) {
        clearTimeout(timeoutId);
        timeoutId = null;
    }
    
    var linhas = [];
    atualizarExecucao(exec, linhas);
    exec.hidden = false;

    var i = inicio;
    function passo() {
        if (i < fim && ((i + numpasso) <= fim)) {
            linhas.push( i + ' 👉 ' + (i + numpasso) );
            atualizarExecucao(exec, linhas);
            i += numpasso;
            timeoutId = setTimeout(passo, 200);
        } else {
            timeoutId = null; // Limpar quando terminar
        }
    }

    passo();
}