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
        /*$num1 = $_GET["a"];
        $num2 = $_GET["b"];
        $tipoDeOperacao = $_GET["op"];
        
        echo "Os valores passados foram $num1 e $num2.<br/>";
        $resultado = ($tipoDeOperacao == "s") ? $num1 + $num2 : $num1 * $num2; //finalmente entendo que caralhos é "?:" no PHP!!!

        echo "<br/>O resultado da operação solicitada foi $resultado."; 
        */

        $nota1 = $_GET["n1"];
        $nota2 = $_GET["n2"];
        $media = ($nota1 + $nota2) / 2;

        echo "A média entre $nota1 e $nota2 é igual a $media.<br/><br/>";
        echo "Situação do aluno: " . ($media >= 6 ? "Aprovado" : "Reprovado") . ".";


    ?>
    
</div>
</body>
</html>
 