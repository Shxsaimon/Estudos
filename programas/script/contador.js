function atualizarExecucao(elemento, linhas) {
    elemento.textContent = linhas.join("\n");
}

var timeoutIds = []; // array para armazenar o ID do timeout atual

function contarComPasso() {
    var inicio = Number(document.getElementById('numinicio').value);
    var fim = Number(document.getElementById('numfim').value);
    var numpasso = Number(document.getElementById('passo').value);
    var exec = document.getElementById('execcontador');
    
    if (inicio == '' || fim == '' || numpasso == '') {
        window.alert('Por favor, preencha todos os campos com números válidos.');
        return;
    } else if (numpasso === 0) {
        window.alert('O passo não pode ser zero.');
        return;
    } else if (inicio == fim) {
        window.alert('O início e o fim não podem ser iguais.');
        return;
    } else if (inicio + numpasso > fim && inicio < fim) {
        window.alert('O passo é muito grande para o intervalo especificado :(');
        return;
    }

    // Cancelar execuções anteriores se existirem
    if (timeoutIds.length > 0) {
        timeoutIds.forEach(id => clearTimeout(id));
        timeoutIds = [];
    }
    
    var linhas = [];
    atualizarExecucao(exec, linhas);
    exec.hidden = false;

    var direcao = inicio < fim ? 1 : -1;
    var passoAbs = numpasso * direcao;
    var numPassos = Math.floor(Math.abs(fim - inicio) / Math.abs(numpasso));

    for (let passo = 0; passo < numPassos; passo++) {
        var timeoutId = setTimeout(() => {
            var numatual = inicio + passo * passoAbs;
            var numprox = numatual + passoAbs;
            linhas.push(numatual + ' 👉 ' + numprox);
            atualizarExecucao(exec, linhas);
        }, passo * 200);
        timeoutIds.push(timeoutId);
    }
}