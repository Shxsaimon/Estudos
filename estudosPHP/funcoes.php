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
        // Exercício 1 - Função básica no PHP
            /*function soma($a, $b){
                $s = $a + $b;
                echo "<p>A soma entre $a e $b é igual a $s</p>";
            }

            soma(3, 4);
            soma(8, 2);
            $x = 9;
            $y = 15;
            soma($x, $y);*/

        // Exercício 2 - Função com retorno no PHP
            /*function somareturna($a, $b){
                $s = $a + $b;
                return $s;
            }

            $resultado = somareturna(3, 4);
            echo "<p>A soma dos valores é igual a $resultado</p>";
            $resultado = somareturna(8, 2);
            echo "<p>A soma dos valores é igual a $resultado</p>";
            $resultado = somareturna(9, 15);
            echo "<p>A soma dos valores é igual a $resultado</p>";*/

        // Exercício 3 - Função que pode receber mais de 2 valores no PHP e retorna a soma
            function soma(){
                $p = func_get_args();
                $t = func_num_args();
                $s = 0;
                for($i = 0; $i < $t; $i++){
                    $s += $p[$i];
                }
                return $s;

            }

            $r = soma(4,8,7,8,7,5,4,6,4,85);
            echo "<p>A soma dos valores é igual a $r</p>";

        ?>
    </div>
</body>
</html>
 