<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="../_css/estilo.css"/>
    <meta charset="UTF-8"/>
    <title>Curso de PHP - CursoemVideo.com</title>
</head>
<body>
    <div>
        <!-- Recebe os valores de inicio, fim e quantidade a aumentar/diminuir por vez do formulário e faz a conta com WHILE -->
        <?php
        $inicio = isset($_GET["numinicio"]) ? $_GET["numinicio"] : 0;
        $fim = isset($_GET["numfim"]) ? $_GET["numfim"] : 0;
        $incr = isset($_GET["numincr"]) ? $_GET["numincr"] : 1;
        $soma = $inicio;
        $contador = $inicio;

        if($inicio <= $fim) {
            while ($contador <= $fim && $soma <= $fim) {
                echo "Calculando... $soma <br/>";
                $soma += $incr;
                $contador++;
            }
        } else {
            while ($contador >= $fim && $soma >= $fim) {
                echo "Calculando... $soma <br/>";
                $soma -= $incr;
                $contador--;
            }
        }
    
        ?>
        <a href="exercicio_while.html" class="botaovoltar">Voltar</a>
    </div>
</body>
</html>
 