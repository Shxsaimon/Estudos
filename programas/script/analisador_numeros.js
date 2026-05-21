function adicionarNumero() {
    let numInput = document.getElementById('numtab');
    let num = numInput.value.trim();
    let select = document.getElementById('numselecionados');
    if (num === '') {
        alert('Por favor, digite um número para adicionar.');
        return;
    }
    if (isNaN(num) || num < 1 || num > 100) {
        alert('Por favor, digite um número válido entre 1 e 100.');
        return;
    }
    let option = document.createElement('option');
    option.text = num;
    select.add(option);
    numInput.value = '';
}

function analisarNumeros() {
    let select = document.getElementById('numselecionados');
    if (select === '' || select.options.length < 2) {
        alert('Por favor, digite no mínimo dois números para análise.');
        return;
    }


}