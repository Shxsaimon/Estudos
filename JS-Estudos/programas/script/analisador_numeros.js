let arrayNumbers = [];

function adicionarNumero() {
    if (arrayNumbers.length < 1) {
        document.getElementById('listaNumeros').textContent = '';
    }
    let result = document.getElementById('resultado');
    result.innerHTML = '';

    let numInput = document.getElementById('numtab');
    let num = numInput.value.trim();
    let lista = document.getElementById('listaNumeros');
    if (num === '') {
        alert('Por favor, digite um número para adicionar.');
        return;
    }
    if (isNaN(num) || num < 1 || num > 100) {
        alert('Por favor, digite um número válido entre 1 e 100.');
        return;
    }
    if (arrayNumbers.includes(num)) {
        alert('Número já adicionado. Por favor, digite um número diferente.');
        return;
    }

    arrayNumbers.push(num);

    let numElement = document.createElement('p');
    numElement.textContent = num;
    lista.appendChild(numElement);
    numInput.value = '';

    console.log(arrayNumbers);
}

function analisarNumeros() {
    let result = document.getElementById('resultado');
    if (arrayNumbers.length < 2) {
        alert('Por favor, adicione no mínimo dois números para análise.');
        return;
    }
    let totalNumeros = arrayNumbers.length;
    let maiorNumero = Math.max(...arrayNumbers);
    let menorNumero = Math.min(...arrayNumbers);
    let somaNumeros = arrayNumbers.reduce((acc, num) => acc + Number(num), 0);
    let mediaNumeros = somaNumeros / totalNumeros;

    result.innerHTML = `<p>Total de números: ${totalNumeros}</p>
                        <p>Maior número: ${maiorNumero}</p>
                        <p>Menor número: ${menorNumero}</p>
                        <p>Soma dos números: ${somaNumeros}</p>
                        <p>Média dos números: ${mediaNumeros.toFixed(2)}</p>`;

}