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
        /* Exercício 1 - sobre a estrutura de Repetição For, colocando uma contagem na tela de forma rapida
        for ($c = 1; $c <= 10; $c++) {
            echo "$c ";
        }
        echo "<br/>";
        for ($c = 10; $c >= 1; $c--) {
            echo "$c ";
        }
        echo "<br/>";
        for ($c = 0; $c <= 100; $c += 10) {
            echo "$c ";
        }*/
         
        // Exercício 2 - Tabuada de um número que o usuário escolher via formulário HTML
            
        $numero = isset($_GET['num']) ? $_GET['num'] : 1;
        for ($c = 1; $c <=10; $c++){
            $resultado = $numero * $c;
            echo "$numero x $c = $resultado <br/>";

        }

        ?>
        <a href="estrutura_for_parte_html.php" class="botao">Voltar</a>
    </div>
</body>
</html>
 