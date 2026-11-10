<!DOCTYPE html>
<html lang="pt-br">
<head>
  <link rel="stylesheet" href="_css/estilo.css"/>
  <meta charset="UTF-8"/>
  <title>Curso de PHP - CursoemVideo.com</title>
</head>
<body>
<div>
    <?php

        echo "Necessário colocar um valor de 'p' e 'aa' na URL para funcionar.<br/>";
        
        $preco = $_GET["p"];
        echo "<br/>O preço do produto é R$ $preco <br/>";
        $preco *= 1.1; // equivalente a $preco = $preco * 1.1
        echo "O novo preço com 10% de aumento é R$ ". number_format($preco, 2) ."<br/>";

        $preco = $_GET["p"];
        $preco *= 0.9; // equivalente a $preco = $preco * 0.9
        echo "O novo preço com 10% de desconto é R$ ". number_format($preco, 2) ."<br/>";

        $atual = $_GET["aa"];
        echo "<br/>O ano atual é: $atual<br/>";
        echo "O ano anterior é: ". --$atual ."<br/>"; //primeiro exibe, depois decrementa, necessário colocar o sinal antes da variável

        $x = 2026;
        $$x = "ano que o Brasil foi hexa campeão do mundo!!!"; //criação de uma variável usando o conteúdo de outra variável
        echo "<br/>Em $x foi o ". $$x; //feito no inicio de 2025, tomara que acertei kkkkk
    ?>
    
</div>
</body>
</html>
 