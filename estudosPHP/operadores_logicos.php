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
        $anoNasc = $_GET["an"];
        $idade = date("Y") - $anoNasc;
        echo "Quem nasceu em $anoNasc tem/terá $idade anos.<br/><br/>";

        $necessitaVoto = ($idade>=18 && $idade<65); //operador lógico "E" (&&) sendo usado para definir a obrigatoriedade do voto, sendo necessário entre 18 e 64 anos.

        echo "E, dessa forma, seu voto é" . ($necessitaVoto ? " obrigatório" : " Não obrigatório") . ".";

    ?>
    
</div>
</body>
</html>
 