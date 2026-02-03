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
            include "todasfuncoes.php";
            // Exercício 01 - função com passagem de parâmetro por referência, ou seja, a variável usada como argumento também é alterada
            // Exercício 02 - Usando funções nativas do php para incluir funções de um arquivo externo
            dizOla();

            function teste($x) {
                $x += 2;
                echo "<p>O valor de X é $x</p>";
            }

            $a = 8;
            teste($a);
            echo "<p>O valor de A é $a</p>";

            mostrarValor($a);

        ?>
    </div>
</body>
</html>
 