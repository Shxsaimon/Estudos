<!DOCTYPE html>
<html lang="pt-br">
<head>
  <link rel="stylesheet" href="_css/estilo.css"/>
  <meta charset="UTF-8"/>

  <?php
        $txt = isset($_GET["txt"]) ? $_GET["txt"] : "[Não informado]";
        $tam = isset($_GET["tam"]) ? $_GET["tam"] : "12pt";
        $cor = isset($_GET["cor"]) ? $_GET["cor"] : "#ff0000";
    ?>
    <style>
            span.texto {
                font-size: <?php echo $tam; ?>;
                color: <?php echo $cor; ?>;
            }
    </style>
  <title>Curso de PHP - CursoemVideo.com</title>
</head>
<body>
<div>
    <?php 
        /* Exercicio 01 - Receber um valor via formulário HTML e calcular a raiz quadrada desse valor
        $v = isset($_GET["valor"]) ? $_GET["valor"] : '0';
        if ($v == '0') {
            echo "Por favor, informe um valor válido!";
        } else{
            $rq = sqrt($v);
            if (fmod($rq, 1) == 0) {
                echo "A raiz quadrada de $v é igual a $rq";
            } else {
                echo "A raiz quadrada de $v é igual a ".number_format($rq, 2)."<br/>";
            }
        } */

        /* Exercicio 02 - Receber nome, ano de nascimento e sexo via formulário HTML e mostrar uma mensagem com essas informações
        $nome = isset($_GET["nome"]) ? $_GET["nome"] : "[Não informado]";
        $ano = isset($_GET["anonasc"]) ? $_GET["anonasc"] : 0;
        $sexo = isset($_GET["sexo"]) ? $_GET["sexo"] : "[Não informado]";
        $idade = date("Y") - $ano;

        echo "Olá, $nome é $sexo e tem $idade anos.<br/>";*/

        /* Exercicio 03 - Receber 3 parametros de "Texto", "Tamanho" e "Cor" e gerar um texto com essas características */
        if (empty($txt)) {
            $txt = "Texto não informado!";
        }
        
        echo "<span class='texto'>$txt</span>";

    ?>


    <a href="integracao_com_php.html">Voltar</a>
</div>
</body>
</html>
 