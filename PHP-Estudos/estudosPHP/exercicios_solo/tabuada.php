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
        //Exercício onde o usuário informa um valor e é mostrada a tabuada deste valor usando Do While

        $numTabuada = isset($_GET["numtabuada"])?$_GET["numtabuada"]:1;
        echo "<strong>Tabuada do $numTabuada:</strong><br/>";
        $contador = 1;

        do {
            $resultado = $numTabuada * $contador;
            echo "<br/>$numTabuada x $contador = $resultado";
            $contador++;

        } while ($contador <= 10);
        
        ?>
        <br/><br/>
        <a href="estrutura_do_while.html" class="botao">Voltar</a>
    </div>
</body>
</html>
 