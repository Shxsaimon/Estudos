<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="../_css/estilo.css"/>
    <meta charset="UTF-8"/>
    <title>Curso de PHP - CursoemVideo.com</title>
</head>
<body>
    <div>
        <?php  
        $num = isset($_GET['num']) ? $_GET['num'] : 1;
        $multiplos = 0;

        echo "<h3>Análise do Número $num</h3>";
       
        echo "Valores múltiplos: ";
        for($i = 1; $i <= $num; $i++){
            if($num % $i == 0){
                echo "$i ";
                $multiplos++;
            }
        }
        echo "<br/>Total de múltiplos: $multiplos<br/>";
        if($multiplos == 2){
            echo "<br/>Resultado: $num <span class='foco'>é primo!</span>";
        } else {
            echo "<br/>Resultado: $num <span class='foco'>não é primo!</span>";
        }
       
        


        ?>
        <br/><br/>
        <a href="numeros_primos.html" class="botao">Voltar</a>
    </div>
</body>
</html>
 