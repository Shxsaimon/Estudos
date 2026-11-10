<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="_css/estilo.css"/>
    <meta charset="UTF-8"/>
    <title>Curso de PHP - CursoemVideo.com</title>
</head>
<body>
    <div>
        <?php
            // Funções strtolower e strtoupper - Converte uma string para minúscula ou maiúscula, respectivamente
            $nome = "Saimon Furigo";
            echo "Meu nome é em letras minúsculas " . strtolower($nome) . ". E meu nome em maiúsculas é " . strtoupper($nome);
            echo "<br/><br/>";

            // Função ucfirst - Converte o primeiro caractere de uma string para maiúscula
            $nome2 = "saimon furigo";
            echo "Meu nome com a primeira letra maiúscula é: " . ucfirst($nome2);
            echo "<br/><br/>";
            // Função ucwords - Converte o primeiro caractere de cada palavra de uma string para maiúscula
            echo "Meu nome com a primeira letra de cada palavra maiúscula é: " . ucwords($nome2);
            echo "<br/><br/>";
            // Função strrev - Inverte uma string
            echo strrev($nome);
            echo "<br/><br/>";
            // Função strpos/stripos - Encontra a posição da primeira ocorrência de uma substring em uma string, caso seja usada a função stripos a busca é feita sem diferenciar maiúsculas de minúsculas
            $frase = "Estou aprendendo PHP";
            echo $frase."<br/>";
            $posi = stripos($frase, "PhP");
            echo "A palavra PHP está na posição: $posi";
            echo "<br/><br/>";
            // Função substr_count - Conta o número de vezes que uma substring aparece em uma string
            $contador = substr_count($nome, "i");
            echo "A letra i aparece $contador vezes no nome: $nome";
            echo "<br/><br/>";
            // Função substr - Retorna uma parte de uma string, onde o primeiro parâmetro é a string original, o segundo é a posição inicial e o terceiro (opcional) é o comprimento da substring. Também pode aceitar valores negativos para começar a contagem a partir do final da string
            $sub = substr($frase, -4,3);
            echo "A substring extraída da frase é: $sub";
            echo "<br/><br/>";
            // Função str_pad - Adiciona preenchimento a uma string até que ela atinja um determinado comprimento. Pode adicionar o preenchimento à esquerda, à direita ou em ambos os lados da string
            $nome3 = "Saimon";
            echo "Meu nome é: " . str_pad($nome3, 20, "*", STR_PAD_BOTH) . " E meu nome com preenchimento à direita é: " . str_pad($nome3, 20, "-", STR_PAD_RIGHT);
            echo "<br/><br/>";
            // Função str_replace/str_ireplace - Substitui todas as ocorrências de uma substring por outra em uma string. A função str_ireplace não diferencia maiúsculas de minúsculas
            $nomereplace = str_ireplace("saimon", "Saimão", $nome);
            echo "Nome original: $nome <br/> Nome alterado: $nomereplace";
            echo "<br/><br/>";
            // Função str_repeat - Repete uma string um número especificado de vezes
            echo "Fim Aulas Funções Nativas de Strings";
            echo "<br/>";
            echo str_repeat("-", 30);



         
         
         ?>
    </div>
</body>
</html>
 