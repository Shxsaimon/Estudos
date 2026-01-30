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

        /*Exercicio 1 onde o usuario informa um numero e uma operação (1-dobro, 2-cubo, 3-raiz quadrada) e o sistema retorna o resultado usando switch case
        $numero = isset($_GET["num"]) ? $_GET["num"] : 0;
        $operacao = isset($_GET["oper"]) ? $_GET["oper"] : 1;

        switch($operacao) {
            case 1:
                $resultado = $numero * 2;
                echo "O dobro de <span class='foco'>$numero</span> é $resultado<br/>";
                break;

            case 2:
                $resultado = $numero ** 3;
                echo "O cubo de <span class='foco'>$numero</span> é $resultado<br/>";
                break;

            case 3:
                $resultado = sqrt($numero);
                if (fmod($resultado, 1) == 0) {
                    echo "A raiz quadrada de <span class='foco'>$numero</span> é igual a $resultado <br/>";
                } else {
                    echo "A raiz quadrada de <span class='foco'>$numero</span> é igual a ".number_format($resultado, 2)."<br/>";
                }
                break;
        }*/

        // Exercicio 2 onde o usuario informa um dia da semana e o sistema retorna se é dia útil ou fim de semana para estudar 

        $diaSemana = isset($_GET["ds"]) ? $_GET["ds"] : 0;

        switch($diaSemana) {
            case 2:
            case 3:
            case 4:  
            case 5:   
            case 6:
                echo "É dia útil! Bora estudar pequeno gafanhoto!<br/>";
                break;
            case 7:
            case 1:
                echo "Fim de semana! Sem estudos, só curtição e descanso!<br/>";
                break;
            default:
                echo "Dia da semana inválido!<br/>";
        }    
    ?>

    <a href="estrutura_switch.html" class="botao">Voltar</a>
</div>
</body>
</html>
 