<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="_css/estilo.css"/>
    <meta charset="UTF-8"/>
    <title>Curso de PHP - CursoemVideo.com</title>
</head>
<body>
    <div>
        <form method="get" action="estrutura_for.php">
            Selecione um número: <select name="num" class="selectpadrao" >
                <?php
                    for($c=1; $c<=10; $c++){
                        echo "<option value='$c'>$c</option>";
                    }
                ?>
            </select><br/>
            <input type="submit" value="Tabuada" class="botao"/>
            

        </form>

 
    </div>
</body>
</html>
 