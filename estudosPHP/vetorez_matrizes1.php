<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="_css/estilo.css"/>
    <meta charset="UTF-8"/>
    <title>Curso de PHP - CursoemVideo.com</title>
</head>
<body>
    <div>

    <pre> <!-- A tag <pre></pre> é usada para mostrar o texto exatamente como ele é escrito, preservando espaços e quebras de linha. -->
        <?php
            // Exercício 01 - Crie um vetor básico com 5 valores e adicionando mais um após
            $numeros = array(1,7,8,6,12);
            $numeros[] = 15;
            print_r($numeros);

            // Exercício 02 - Criando vetor com range, onde o primeiro valor é o início do intervalo, o segundo é o fim do intervalo e o terceiro é o passo, ou seja, de quanto em quanto os números serão incrementados
            $numerosRang = range(2.2,16.4,4.1);
            print_r($numerosRang);

            // Exercício 03 - Aprendendo a usar foreach para mostrar os valores do vetor
            foreach($numeros as $num){
                echo "O número é $num <br/>";
            }

            // Exercício 04 - Vetor com chaves personalizadas, onde o primeiro valor é a chave e o segundo é o valor, ou seja, a chave 1 tem o valor "A", a chave 7 tem o valor "B" e assim por diante
            $valores = array(1=>"A", 7=>"B", 8=>"C", 6=>"D", 12=>"E");
            $valores[15] = "F";
            print_r($valores);
            unset($valores[7]); // A função unset() é usada para remover um elemento do vetor, nesse caso o elemento com a chave 7
            print_r($valores);

            // Exercício 05 - Criando um vetor associativo, onde o primeiro valor é a chave e o segundo é o valor, ou seja, a chave "nome" tem o valor "Maria", a chave "idade" tem o valor 25 e assim por diante
            $pessoa = array("nome"=>"Saimon", "idade"=>21, "peso"=>"68kg");
            print_r($pessoa);
            $pessoa["altura"] = "1.70m"; // Adicionando um novo elemento ao vetor associativo, onde a chave é "altura" e o valor é "1.75m"
            foreach($pessoa as $chave => $valor){ // Usando foreach para mostrar os valores do vetor associativo, onde a variável $chave recebe a chave do elemento e a variável $valor recebe o valor do elemento
                echo "A chave é $chave e o valor é $valor <br/>";
            }

            // Exercício 06 - Criando um vetor multidimensional, onde o primeiro valor é a chave e o segundo é um vetor associativo, ou seja, a chave "pessoa1" tem um vetor associativo com as chaves "nome", "idade" e "peso", a chave "pessoa2" tem um vetor associativo com as chaves "nome", "idade" e "peso" e assim por diante
            $matriz = array(array("nome"=>"Saimon", "idade"=>21, "peso"=>"68kg"),
                            array("nome"=>"Maria", "idade"=>25, "peso"=>"60kg"),
                            array("nome"=>"João", "idade"=>30, "peso"=>"80kg"));
            print_r($matriz);
            $matriz[0]["peso"] = "70kg"; // Alterando o valor do elemento com a chave 0 e a chave 2, ou seja, o peso da pessoa1
            print_r($matriz);
        ?>
    </pre>

    </div>
</body>
</html>
 