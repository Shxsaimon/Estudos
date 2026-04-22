function verificarIdade() {
    var dataInput = document.getElementById('inputidade').value;
    var sexoSelecionado = document.querySelector('input[name="sexo"]:checked');
    
    var dataNascimento = new Date(dataInput);
    var dataAtual = new Date();
    // Validar se foi preenchida a data
    if (!dataInput || dataInput > dataAtual.toISOString().split('T')[0]) {
        alert('Por favor, insira uma data de nascimento válida!');
        return;
    }
    
    // Validar se foi selecionado um sexo
    if (!sexoSelecionado) {
        alert('Por favor, selecione um sexo');
        return;
    }
    
    // Parse da data (formato: YYYY-MM-DD)
    
    // Cálculo correto da idade considerando mês e dia
    var idade = dataAtual.getFullYear() - dataNascimento.getFullYear();
    var mesAtual = dataAtual.getMonth();
    var mesNascimento = dataNascimento.getMonth();
    var diaAtual = dataAtual.getDate();
    var diaNascimento = dataNascimento.getDate();
    
    // Se ainda não fez aniversário neste ano, subtrai 1
    if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
        idade--;
    }
    
    var sexo = sexoSelecionado.value;
    var resultado = document.getElementById('resultado');
    var containerImagem = document.getElementById('imagem-verificar');
    containerImagem.innerHTML = '';
    var imagem = document.createElement('img');

    if (idade <= 3) {
    resultado.innerHTML = "Você é " + (sexo === 'masculino' ? 'um homemzinho' : 'uma mocinha') + " de " + idade + (idade === 1 ? ' ano.' : ' anos.');
    imagem.src = sexo === 'masculino' ? 'style/bebe-menino.png' : 'style/bebe-menina.jpg';
    } else if (idade <= 12) {
    resultado.innerHTML = "Você é " + (sexo === 'masculino' ? 'um menino' : 'uma menina') + " de " + idade + " anos.";
    imagem.src = sexo === 'masculino' ? 'style/crianca-menino.jpg' : 'style/crianca-menina.jpg';
    } else if (idade <= 19) {
    resultado.innerHTML = "Você é " + (sexo === 'masculino' ? 'um adolescente' : 'uma adolescente') + " de " + idade + " anos.";
    imagem.src = sexo === 'masculino' ? 'style/adolescente-menino.jpg' : 'style/adolescente-menina.jpg';
    } else if (idade < 60) {
    resultado.innerHTML = "Você é " + (sexo === 'masculino' ? 'um adulto' : 'uma adulta') + " de " + idade + " anos.";
    imagem.src = sexo === 'masculino' ? 'style/adulto.png' : 'style/adulta.jpg';
    } else {
    resultado.innerHTML = "Você é " + (sexo === 'masculino' ? 'um idoso' : 'uma idosa') + " de " + idade + " anos.";
    imagem.src = sexo === 'masculino' ? 'style/idoso.jpg' : 'style/idosa.jpg';
    }

    // IMAGENS MERAMENTE ILUSTRATIVAS, NÃO ESTOU ASSOCIANDO A NENHUMA PESSOA REAL, APENAS PARA FINS DE EXEMPLO E RISADINHAS.
    console.log("Data de nascimento: " + dataNascimento);
    console.log("Idade calculada: " + idade);
    console.log("Sexo: " + sexo);
    containerImagem.appendChild(imagem);
}