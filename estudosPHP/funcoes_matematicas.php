<!DOCTYPE html>
<html lang="pt-br">
<head>
  <link rel="stylesheet" href="_css/estilo.css"/>
  <meta charset="UTF-8"/>
  <title>Curso de PHP - CursoemVideo.com</title>
    <style>
        h2{
            color: midnightblue;
        }
    </style>
</head>
<body>
<div>
    <?php
    $valor1 = $_GET["z"];
    $valor2 = $_GET["w"];
    echo "<h2>Valores recebidos: $valor1 e $valor2</h2><br/>"; //exibe os valores recebidos via URL
    echo "O valor absoluto de ".$valor2." é ".abs($valor2)."<br/>"; //valor absoluto, ou seja, o valor sem o sinal
    echo "O valor de $valor1<sup>$valor2</sup> é " .pow($valor1,$valor2) ."<br/>";//formatada como potencia e faz a potenciação
    echo "A raiz de $valor1 é " .number_format(sqrt($valor1),3)."<br/>"; //raiz quadrada formatada com 3 casas decimais
    echo "O valor arredondado de $valor2 é " .round($valor2)."<br/>"; //arredonda o valor para o inteiro mais próximo
    echo "A parte inteira de $valor2 é " .intval($valor2)."<br/>"; //pega apenas a parte inteira do valor
    echo "O valor de $valor1 em moeda é R$". number_format($valor1,2,",",".")."<br/>"; //formata o valor como moeda

    ?>
</div>
</body>
</html>
