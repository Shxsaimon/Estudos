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

        // Exercicio 1 onde o usuario informa o ano de nascimento e informa-o se a idade dele tem voto obrigatório ou opcional
        /*$anonasc = $_GET["ano"];   
        $idade = date("Y") - $anonasc;
        echo "Quem nasceu em $anonasc tem idade de $idade anos.<br/>";
        if (($idade >= 16 && $idade < 18) || ($idade > 65)) {
            echo "Voto opcional. <br/>";
        } else if (($idade >= 18) && ($idade < 65)) {
            echo "Voto obrigatório. <br/>";
        }*/

        //Exercicio 2 onde o usuario informa a nota e o sistema informa se ele foi aprovado ou reprovado    

        $nota1 = isset($_GET["n1"]) ? $_GET["n1"] : 0;
        $nota2 = isset($_GET["n2"]) ? $_GET["n2"] : 0;
        $media = number_format((($nota1 + $nota2) / 2), 2, ",", ".");

        if($media >= 7) {
            echo "Sua média foi $media. <br/> Parabéns, você foi aprovado!<br/> ";
        } else if($media >= 5 && $media < 7) {
            echo "Sua média foi $media. <br/> Você está em recuperação.<br/> ";
        } else {
            echo "Sua média foi $media. <br/> Infelizmente você foi reprovado.<br/> ";
        }
                
    ?>

    <a href="estruturas_condicionais.html" class="botaovoltar">Voltar</a>
</div>
</body>
</html>
 