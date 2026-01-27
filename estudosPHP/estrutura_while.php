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

            /* Repetição simples com WHILE
            $contador = 1;
            while ($contador <= 10) {
                echo "$contador <br/>";
                $contador++;
            }

            $contador = 10;
            while ($contador >= 1) {
                echo "$contador <br/>";
                $contador -= 2;
            }*/

            /* Fomrulário com HTML e PHP - WHILE onde recebe valores e os somam*/
            echo "<form method='get' action='estrutura_while.php'>";
            $contador = 1;
            while ($contador <= 5)  {
                echo "Valor $contador: <input type='number' name='valor$contador' min='1' max='100' ><br/>";
                $contador++;
            } 
            echo "<input type='submit' value='Enviar' class='botaoenv' onclick='limparTela()'/>";
            echo "</form> <br/>";
            $soma = 0;
            $contador = 1;  
            while ($contador <= 5) {
                $soma += $_GET["valor$contador"];
                $contador++;
            }
            echo "A soma dos Valores é: $soma"; //Não consegui fazer com que os campos input aparecessem vazios após o envio do formulário sem usar outro arquivo e consequentemente fugi do proposito da aula mas fiz da minha forma o uso do while.
            
            ?>

    </div>
</body>
</html>
 