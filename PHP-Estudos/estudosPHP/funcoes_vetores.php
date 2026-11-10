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
            // Exercício 01 - Usando função print_r() para mostrar o conteúdo de um vetor.
            $vetor = array(10,21,20,11,12);
            print_r($vetor);
            // Exercício 02 - Usando função var_dump() para mostrar o conteúdo de um vetor.
            var_dump($vetor);
            // Exercício 03 - Forma básica de colocar um valor dentro da array, sendo no final da array
            $vetor[] = 22; 
            // OU
            array_push($vetor, 11); // Adiciona o valor 50 no final do vetor.
            echo "array_push():";
            print_r($vetor);
            // Exercício 04 - Elimando o último valor do vetor com a função array_pop()
            array_pop($vetor); 
            echo "array_pop():";
            print_r($vetor);
            // Exercício 05 - Adicionado um valor no inicio do vetor com a função array_unshift()
            array_unshift($vetor,01);
            echo "array_unshift():";
            print_r($vetor);
            // Exercício 06 - Eliminando o primeiro valor do vetor com a função array_shift()
            array_shift($vetor);
            echo "array_shift():";
            print_r($vetor);
            // Exercício 07 - Reorganizando o vetor com a função sort() onde organiza de forma crescente // Também tem a função rsort() para organizar de forma reversa.
            rsort($vetor);
            echo "rsort()/sort():";
            print_r($vetor);
            // Exercício 08 - Reorganizando o vetor com a função asort() de forma crescente mas mantendo os índices(chaves/keys) // Também tem a função arsort() para organizar de forma reversa.
            asort($vetor);
            echo "asort()/arsort():";
            print_r($vetor);
            // Exercício 09 - Organizando o vetor com a função ksort() de forma crescente onde organiza pelos índices(chaves/keys) // Também tem a função krsort() para organizar de forma reversa.
            ksort($vetor);
            echo "ksort()/krsort():";
            print_r($vetor);



        ?>
    </pre>

    </div>
</body>
</html>
 