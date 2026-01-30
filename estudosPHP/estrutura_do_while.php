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
        /*Exercício 1 - Aprendendo o funcionamento do Do While com uma contagem simples
        $contador = 1;
        do {
            echo "$contador ";
            $contador++;
        } while ($contador <= 10);*/

        //Exercício 2 - onde o usuário informa um valor e é feito o fatorial deste valor usando Do While
        $valor = isset($_GET["valor"])?$_GET["valor"]:1;
        echo "Calculando o Fatorial de $valor <br/>";

        $contador = $valor;
        $fatorial = 1;

        do {
            $fatorial = $fatorial * $contador;
            $contador--;
        } while ($contador > 1);

        echo "<br/>O Fatorial ($valor!) é $fatorial";
        ?>
        <br/>
        <a href="estrutura_do_while.html" class="botao">Voltar</a>
    </div>
</body>
</html>
 