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

            /*Exercício 1 - Aprendendo usar while com uma repetição simples
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

            /* Exercício 2 - Formulário com HTML e PHP onde recebe valores e os somam. Fato aqui é que tentei usar apenas um arquivo para o exercício mas não funciona corretamente, ao abrir o arquivo da erro por não ter os valores definidos ainda*/
            
            echo "<form method='get' action='estrutura_while.php'>";
            $contador = 1;
            while ($contador <= 5)  {
                echo "Valor $contador: <input type='number' name='valor$contador' min='1' max='100' ><br/>";
                $contador++;
            } 
            echo "<input type='submit' value='Enviar' class='botao' onclick='limparTela()'/>";
            echo "</form> <br/>";
            $soma = 0;
            $contador = 1;  
            while ($contador <= 5) {
                $soma += $_GET["valor$contador"];
                $contador++;
            }
            echo "A soma dos Valores é: $soma";
            
            ?>

    </div>
</body>
</html>
 