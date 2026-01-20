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
        $num1 = $_GET["a"];
        $num2 = $_GET["b"];

        echo "A soma de $num1 e $num2 é igual a ".($num1+$num2)."<br/>";
        echo "A subtração de $num1 e $num2 é igual a ".($num1-$num2)."<br/>";
        echo "A multiplicação de $num1 e $num2 é igual a ".($num1*$num2)."<br/>";
        echo "A divisão de $num1 e $num2 é igual a ".($num1/$num2)."<br/>";
        echo "O módulo de $num1 e $num2 é igual a ".($num1%$num2)."<br/>";
        echo "A média vale ".(($num1+$num2)/2)."<br/>";
    ?>
</div>
</body>
</html>
 