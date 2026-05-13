function tabuada() {
    var numero = Number(document.getElementById('numtab').value);
    var select = document.getElementById('selecttabuada');

    if (numero == '') {
        window.alert('Por favor, preencha o campo com um número válido.');
        return;
    }

    var linhas = [];
    select.innerHTML = ''; // Limpa as opções anteriores
    for (var i = 1; i <= 10; i++) {
        linhas.push(numero + ' × ' + i + ' = ' + (numero * i));
        option = document.createElement('option');
        option.textContent = linhas[i - 1];
        select.add(option);
        select.hidden = false;
    }
}