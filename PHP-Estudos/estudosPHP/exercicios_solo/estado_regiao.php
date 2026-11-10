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

        // Exercicio 3 onde o usuario informa a sigla de um estado brasileiro e o sistema retorna a região correspondente 

        $estado = isset($_GET["uf"]) ? $_GET["uf"] : 0;
        switch($estado) {
            case "MG":
            case "SP":
            case "RJ":
            case "ES":
                echo "Sudeste<br/>";
                break;
            case "BA":
            case "SE":
            case "AL":
            case "PE":
            case "PB":
            case "RN":
            case "CE":
            case "PI":
            case "MA":
                echo "Nordeste<br/>";
                break;
            case "DF":
            case "GO":
            case "MT":
            case "MS":
                echo "Centro-Oeste<br/>";
                break;
            case "PR":
            case "SC":
            case "RS":
                echo "Sul<br/>";
                break;
            case "AC":
            case "AP":
            case "AM":
            case "PA":
            case "RO":
            case "RR":
            case "TO":
                echo "Norte<br/>";
                break;
            default:
                echo "Sigla de estado inválida!<br/>";
        }
                
    ?>

    <a href="estrutura_switch.html" class="botao">Voltar</a>
</div>
</body>
</html>
 