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
            $preco = 4.5;
            $prod = "Leite";
            //%s - string e %.2f - float com 2 casas decimais
            printf("O %s custa R$ %.2f", $prod, $preco);
            echo "<br/><br/>";
            //Função print_r - imprimir arrays
            $x[0]= "Olá";
            $x[1]= "Mundo";
            $x[2]= "!";
            print_r($x);
            echo "<br/><br/>";
            // Função wordwrap - Quebra de texto podendo definir o tamanho da linha e se quebra no meio da palavra ou não
            $txt = "Textão enorme para verificar o funcionamento da função wordwrap em PHP. O wordwrap serve para quebrar linhas muito grandes em várias linhas menores, facilitando a leitura e a organização do texto na tela ou em documentos gerados.";
            $restxt = wordwrap($txt, 55, "<br/>\n", true);
            echo "$restxt";
            echo "<br/><br/>";
            // Função strlen - Conta o número de caracteres de uma string
            echo "Tamanho do texto: " . strlen($txt) . " caracteres";
            echo "<br/><br/>";
            // Função trim - Remove espaços em branco no início e no fim de uma string. Funções ltrim remove apenas no início e rtrim no fim
            $nome = "  Olá Mundo!  ";
            echo "Tamanho do nome: " . strlen($nome) . " caracteres";
            echo "<br/>";
            echo "Tamanho do nome sem espaços nas extremidades: " . strlen(trim($nome)) . " caracteres";
            echo "<br/><br/>";
            // Função str_word_count - Conta o número de palavras em uma string se usado parametro 0, se usado parametro 1 retorna um array com as palavras e se usado parametro 2 retorna um array com as posições iniciais das palavras
            $frase = "Estou usando str word count em PHP";
            $cont = str_word_count($frase, 2);
            /*echo "A frase tem $cont palavras.";*/ print_r($cont);
            echo "<br/><br/>";
            // Função explode - Divide uma string com base em um delimitador e retorna um array
            $vetor = explode(" ", $frase);
            print_r($vetor);
            echo "<br/><br/>";
            // Função str_split - Divide uma string em um array, onde cada elemento é um caractere da string
            $vetor2 = str_split($prod);
            print_r($vetor2);
            echo "<br/><br/>";
            // Função implode - Junta os elementos de um array em uma string, usando um delimitador //join()funciona da mesma maneira que implode)
            $texto = implode("#", $vetor);
            echo $texto;
            echo "<br/><br/>";
            // Função chr - Retorna o caractere correspondente ao valor ASCII fornecido
            $letra = chr(80);
            echo "A letra de código ASCII 80 é: $letra";
            echo "<br/><br/>";
            // Função ord - Retorna o valor ASCII do primeiro caractere de uma string
            $letra2 = "P";
            $valor = ord($letra2);
            echo "O código ASCII da letra $letra2 é: $valor";

        ?>
    </div>
</body>
</html>
 