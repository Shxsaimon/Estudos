/**
 * Catálogo central de exercícios e estudos do Hub
 * Mapeamento de todos os arquivos das 4 trilhas de aprendizado
 */

export const TRACKS = {
    js: {
        id: 'js',
        name: 'JavaScript',
        icon: 'js',
        badgeColor: '#F7DF1E',
        badgeBg: 'rgba(247, 223, 30, 0.12)',
        description: 'Estudos em JavaScript para web, manipulação de DOM e mini-projetos interativos (Curso em Vídeo).',
        externalLinks: [
            { label: 'Curso em Vídeo (JS)', url: 'https://www.cursoemvideo.com/curso/javascript/' }
        ]
    },
    php: {
        id: 'php',
        name: 'PHP',
        icon: 'php',
        badgeColor: '#8892BF',
        badgeBg: 'rgba(136, 146, 191, 0.15)',
        description: 'Práticas de PHP back-end, operadores, repetições, manipulação de arrays e integração com HTML.',
        externalLinks: [
            { label: 'Curso em Vídeo (PHP)', url: 'https://www.cursoemvideo.com/curso/php-basico/aulas/php/' }
        ]
    },
    visualg: {
        id: 'visualg',
        name: 'Portugol Visualg',
        icon: 'visualg',
        badgeColor: '#10B981',
        badgeBg: 'rgba(16, 185, 129, 0.15)',
        description: 'Fundamentos de lógica de programação e algoritmos estruturados com a ferramenta clássica Visualg.',
        externalLinks: [
            { label: 'Visualg Web (visualg.dev)', url: 'https://visualg.dev' },
            { label: 'Download Visualg 3.0 (SourceForge)', url: 'https://sourceforge.net/projects/visualg30/' }
        ]
    },
    webstudio: {
        id: 'webstudio',
        name: 'Portugol Webstudio',
        icon: 'webstudio',
        badgeColor: '#06B6D4',
        badgeBg: 'rgba(6, 182, 212, 0.15)',
        description: 'Exercícios práticos de algoritmos e lógica desenvolvidos no ambiente Portugol Webstudio (EBAC).',
        externalLinks: [
            { label: 'Portugol Webstudio Oficial', url: 'https://portugol.dev' }
        ]
    }
};

export const EXERCISES = [
    // ==================== JAVASCRIPT ====================
    {
        id: 'js-analisador-numeros',
        track: 'js',
        category: 'Mini-Projetos',
        title: 'Analisador de Números',
        path: 'JS-Estudos/programas/analisador_numeros.html',
        type: 'html',
        hasPreview: true,
        description: 'Lógica em JS para coletar números em uma lista e calcular quantidade, maior, menor, soma e média.'
    },
    {
        id: 'js-contador-passo',
        track: 'js',
        category: 'Mini-Projetos',
        title: 'Contador com Passo',
        path: 'JS-Estudos/programas/contador.html',
        type: 'html',
        hasPreview: true,
        description: 'Contador interativo com início, fim e passo configurável pelo usuário.'
    },
    {
        id: 'js-horarios-dias',
        track: 'js',
        category: 'Mini-Projetos',
        title: 'Horários do Dia',
        path: 'JS-Estudos/programas/horarios_dias.html',
        type: 'html',
        hasPreview: true,
        description: 'Página que altera layout, imagem e cores dinamicamente conforme a hora atual do sistema.'
    },
    {
        id: 'js-tabuada',
        track: 'js',
        category: 'Mini-Projetos',
        title: 'Gerador de Tabuada',
        path: 'JS-Estudos/programas/tabuada.html',
        type: 'html',
        hasPreview: true,
        description: 'Ao digitar um número, gera dinamicamente um select com a tabuada completa de 1 a 10.'
    },
    {
        id: 'js-verificar-idade',
        track: 'js',
        category: 'Mini-Projetos',
        title: 'Verificador de Idade',
        path: 'JS-Estudos/programas/verificar_idade.html',
        type: 'html',
        hasPreview: true,
        description: 'Calcula a idade a partir do ano de nascimento informado e exibe foto correspondente à faixa etária e sexo.'
    },
    {
        id: 'js-dom',
        track: 'js',
        category: 'Fundamentos',
        title: 'Introdução ao DOM & Eventos',
        path: 'JS-Estudos/estudosJS/dom.html',
        type: 'html',
        hasPreview: true,
        description: 'Manipulação de elementos da árvore DOM via getElementById, querySelector e eventos interativos.'
    },
    {
        id: 'js-condicionais',
        track: 'js',
        category: 'Fundamentos',
        title: 'Estruturas Condicionais',
        path: 'JS-Estudos/estudosJS/condicionais.html',
        type: 'html',
        hasPreview: true,
        description: 'Práticas com if, else, condições aninhadas e switch em JavaScript.'
    },
    {
        id: 'js-repeticoes',
        track: 'js',
        category: 'Fundamentos',
        title: 'Estruturas de Repetição',
        path: 'JS-Estudos/estudosJS/repeticoes.html',
        type: 'html',
        hasPreview: true,
        description: 'Laços while, do-while e for com visualização da lógica na tela.'
    },
    {
        id: 'js-operadores',
        track: 'js',
        category: 'Fundamentos',
        title: 'Operadores Aritméticos & Lógicos',
        path: 'JS-Estudos/estudosJS/operadores.html',
        type: 'html',
        hasPreview: true,
        description: 'Testes práticos de operadores de atribuição, relacionais e aritméticos em JS.'
    },
    {
        id: 'js-tratamento-dados',
        track: 'js',
        category: 'Fundamentos',
        title: 'Tratamento de Dados',
        path: 'JS-Estudos/estudosJS/tratamento_dados.html',
        type: 'html',
        hasPreview: true,
        description: 'Manipulação de strings, conversão de números (Number.parseInt) e formatação monetária.'
    },
    {
        id: 'js-ola-mundo',
        track: 'js',
        category: 'Fundamentos',
        title: 'Primeiro Script: Olá Mundo',
        path: 'JS-Estudos/olamundo.html',
        type: 'html',
        hasPreview: true,
        description: 'O clássico Olá Mundo em JavaScript com window.alert e document.write.'
    },

    // ==================== PHP ====================
    {
        id: 'php-numeros-primos',
        track: 'php',
        category: 'Exercícios Solo',
        title: 'Verificador de Números Primos',
        path: 'PHP-Estudos/estudosPHP/exercicios_solo/numeros_primos.php',
        type: 'php',
        hasPreview: true,
        description: 'Programa que analisa um número informado e calcula se ele é primo, listando seus múltiplos.'
    },
    {
        id: 'php-contagem-incr-decr',
        track: 'php',
        category: 'Exercícios Solo',
        title: 'Contagem Incremental / Decremental',
        path: 'PHP-Estudos/estudosPHP/exercicios_solo/contagem_incr_decr.php',
        type: 'php',
        hasPreview: true,
        description: 'Contador flexível que detecta se deve contar progressiva ou regressivamente de acordo com os limites.'
    },
    {
        id: 'php-estado-regiao',
        track: 'php',
        category: 'Exercícios Solo',
        title: 'Identificador de Estados & Regiões',
        path: 'PHP-Estudos/estudosPHP/exercicios_solo/estado_regiao.php',
        type: 'php',
        hasPreview: true,
        description: 'Formulário que mapeia a unidade federativa selecionada para a respectiva macrorregião brasileira.'
    },
    {
        id: 'php-tabuada',
        track: 'php',
        category: 'Exercícios Solo',
        title: 'Tabuada Dinâmica com Formulário',
        path: 'PHP-Estudos/estudosPHP/exercicios_solo/tabuada.php',
        type: 'php',
        hasPreview: true,
        description: 'Gera a tabuada matemática completa com integração de formulário HTML e laço de repetição.'
    },
    {
        id: 'php-estruturas-condicionais',
        track: 'php',
        category: 'Estruturas de Controle',
        title: 'Estruturas Condicionais (if/else)',
        path: 'PHP-Estudos/estudosPHP/estruturas_condicionais.php',
        type: 'php',
        hasPreview: true,
        description: 'Avaliação de condições, cálculo de idade de voto e elegibilidade.'
    },
    {
        id: 'php-estrutura-switch',
        track: 'php',
        category: 'Estruturas de Controle',
        title: 'Estrutura Switch',
        path: 'PHP-Estudos/estudosPHP/estrutura_switch.php',
        type: 'php',
        hasPreview: true,
        description: 'Uso da instrução switch/case para operações matemáticas e escolhas múltiplas.'
    },
    {
        id: 'php-estrutura-while',
        track: 'php',
        category: 'Estruturas de Controle',
        title: 'Estrutura de Repetição While',
        path: 'PHP-Estudos/estudosPHP/estrutura_while.php',
        type: 'php',
        hasPreview: true,
        description: 'Prática de laços de repetição enquanto com contadores simples e decrementais.'
    },
    {
        id: 'php-estrutura-do-while',
        track: 'php',
        category: 'Estruturas de Controle',
        title: 'Estrutura de Repetição Do-While',
        path: 'PHP-Estudos/estudosPHP/estrutura_do_while.php',
        type: 'php',
        hasPreview: true,
        description: 'Laço de repetição com teste lógico no final para execução garantida de ao menos uma iteração.'
    },
    {
        id: 'php-estrutura-for',
        track: 'php',
        category: 'Estruturas de Controle',
        title: 'Estrutura de Repetição For',
        path: 'PHP-Estudos/estudosPHP/estrutura_for.php',
        type: 'php',
        hasPreview: true,
        description: 'Laço com variável de controle para contagens precisas e iterações de passo.'
    },
    {
        id: 'php-vetores-matrizes',
        track: 'php',
        category: 'Coleções & Arrays',
        title: 'Vetores e Matrizes em PHP',
        path: 'PHP-Estudos/estudosPHP/vetorez_matrizes1.php',
        type: 'php',
        hasPreview: true,
        description: 'Declaração de arrays, chaves associativas, funções range, foreach e manipulação de índices.'
    },
    {
        id: 'php-funcoes-vetores',
        track: 'php',
        category: 'Coleções & Arrays',
        title: 'Funções Nativas para Vetores',
        path: 'PHP-Estudos/estudosPHP/funcoes_vetores.php',
        type: 'php',
        hasPreview: true,
        description: 'Uso de print_r, var_dump, array_push, array_pop, sort, rsort, ksort e ordenações.'
    },
    {
        id: 'php-funcoes-nativas-strings',
        track: 'php',
        category: 'Funções Nativas',
        title: 'Funções Nativas para Strings (Parte 1)',
        path: 'PHP-Estudos/estudosPHP/func_nativas_strings.php',
        type: 'php',
        hasPreview: true,
        description: 'printf, print_r, wordwrap, strlen, trim, str_word_count, explode, str_split e join.'
    },
    {
        id: 'php-funcoes-nativas-strings-2',
        track: 'php',
        category: 'Funções Nativas',
        title: 'Funções Nativas para Strings (Parte 2)',
        path: 'PHP-Estudos/estudosPHP/func_nativas_strings2.php',
        type: 'php',
        hasPreview: true,
        description: 'strtolower, strtoupper, ucfirst, ucwords, strrev, strpos, stripos, substr e str_replace.'
    },
    {
        id: 'php-funcoes-matematicas',
        track: 'php',
        category: 'Funções Nativas',
        title: 'Funções Matemáticas',
        path: 'PHP-Estudos/estudosPHP/funcoes_matematicas.php',
        type: 'php',
        hasPreview: true,
        description: 'abs, pow, sqrt, round, ceil, floor, intval e number_format.'
    },
    {
        id: 'php-funcoes-procedimentos',
        track: 'php',
        category: 'Rotinas Customizadas',
        title: 'Procedimentos e Funções Customizadas',
        path: 'PHP-Estudos/estudosPHP/funcoes.php',
        type: 'php',
        hasPreview: true,
        description: 'Criação de rotinas com passagem de parâmetros por valor e múltiplos argumentos (func_get_args).'
    },
    {
        id: 'php-funcoes-retorno-referencia',
        track: 'php',
        category: 'Rotinas Customizadas',
        title: 'Passagem por Referência & Includes',
        path: 'PHP-Estudos/estudosPHP/funcoes2.php',
        type: 'php',
        hasPreview: true,
        description: 'Passagem de parâmetros com & (referência) e reutilização de código com include e require.'
    },
    {
        id: 'php-integracao-html',
        track: 'php',
        category: 'Integração Web',
        title: 'Integração PHP com Formulários HTML',
        path: 'PHP-Estudos/estudosPHP/integracao_com_html.php',
        type: 'php',
        hasPreview: true,
        description: 'Recebimento e tratamento de requisições GET/POST vindas de formulários.'
    },
    {
        id: 'php-ola-mundo',
        track: 'php',
        category: 'Fundamentos',
        title: 'Olá Mundo em PHP',
        path: 'PHP-Estudos/olamundo.php',
        type: 'php',
        hasPreview: true,
        description: 'Primeiro script executando tags <?php echo "Olá, Mundo!"; ?>.'
    },

    // ==================== PORTUGOL VISUALG ====================
    {
        id: 'vis-4-numeros',
        track: 'visualg',
        category: 'Códigos Autorais',
        title: 'Operações com 4 Números',
        path: 'Portugol-Visualg/codigos/4-NUMEROS.ALG',
        type: 'alg',
        hasPreview: false,
        description: 'Lê 4 valores inteiros e realiza cálculos relacionais e somas condicionais.'
    },
    {
        id: 'vis-ano-nascimento',
        track: 'visualg',
        category: 'Códigos Autorais',
        title: 'Cálculo de Idade & Nascimento',
        path: 'Portugol-Visualg/codigos/ANO-DE-NASCIMENTO.ALG',
        type: 'alg',
        hasPreview: false,
        description: 'Entrada do ano de nascimento e cálculo da idade atual com mensagem correspondente.'
    },
    {
        id: 'vis-area-quadrado',
        track: 'visualg',
        category: 'Códigos Autorais',
        title: 'Cálculo de Área de Quadriláteros',
        path: 'Portugol-Visualg/codigos/AREA-QUADRADO.ALG',
        type: 'alg',
        hasPreview: false,
        description: 'Algoritmo para calcular a área de figuras geométricas planas.'
    },
    {
        id: 'vis-perimetro-retangulo',
        track: 'visualg',
        category: 'Códigos Autorais',
        title: 'Perímetro de Retângulo',
        path: 'Portugol-Visualg/codigos/CALCULADORA-PERIMETRO-RETANGULO.ALG',
        type: 'alg',
        hasPreview: false,
        description: 'Calculadora que recebe base e altura e determina o perímetro total.'
    },
    {
        id: 'vis-conversor-tempo',
        track: 'visualg',
        category: 'Códigos Autorais',
        title: 'Conversor de Horas, Minutos e Segundos',
        path: 'Portugol-Visualg/codigos/CONVERSOR-HORA-MINUOTO-SEGUNDO.ALG',
        type: 'alg',
        hasPreview: false,
        description: 'Converte unidades temporais fracionadas para escala de segundos e vice-versa.'
    },
    {
        id: 'vis-dias-vividos',
        track: 'visualg',
        category: 'Códigos Autorais',
        title: 'Estimativa de Dias Vividos',
        path: 'Portugol-Visualg/codigos/DIAS-VIVIDOS.ALG',
        type: 'alg',
        hasPreview: false,
        description: 'Calcula o total aproximado de dias vividos com base na idade em anos.'
    },
    {
        id: 'vis-media-aluno',
        track: 'visualg',
        category: 'Códigos Autorais',
        title: 'Média de Notas do Aluno',
        path: 'Portugol-Visualg/codigos/MEDIA-ALUNO.ALG',
        type: 'alg',
        hasPreview: false,
        description: 'Coleta notas bimestrais, calcula média aritmética e define situação (Aprovado/Reprovado).'
    },
    {
        id: 'vis-salario-desconto',
        track: 'visualg',
        category: 'Códigos Autorais',
        title: 'Cálculo de Salário Líquido e Descontos',
        path: 'Portugol-Visualg/codigos/SALARIO-COM-DESCONTO-E-LIQUIDO.ALG',
        type: 'alg',
        hasPreview: false,
        description: 'Aplica alíquotas de desconto de impostos e encargos sobre o salário bruto.'
    },
    {
        id: 'vis-jogo-da-velha',
        track: 'visualg',
        category: 'Aulas Curso em Vídeo',
        title: 'Jogo da Velha em Matriz 3x3',
        path: 'Portugol-Visualg/algoritmos-cursoemvideo/exercicios/aula15/exercicios-prontos/02-velha.alg',
        type: 'alg',
        hasPreview: false,
        description: 'Jogo da Velha completo para dois jogadores alternados utilizando matriz multidimensional.'
    },
    {
        id: 'vis-torneio-futebol',
        track: 'visualg',
        category: 'Aulas Curso em Vídeo',
        title: 'Tabela de Torneio de Futebol',
        path: 'Portugol-Visualg/algoritmos-cursoemvideo/exercicios/aula14/exercicios-prontos/e01-TorneioFutebol.alg',
        type: 'alg',
        hasPreview: false,
        description: 'Lê nomes de times em um vetor e monta a tabela de confrontos sem repetir times iguais.'
    },
    {
        id: 'vis-detector-pesado',
        track: 'visualg',
        category: 'Aulas Curso em Vídeo',
        title: 'Detector da Pessoa Mais Pesada',
        path: 'Portugol-Visualg/algoritmos-cursoemvideo/exercicios/aula12/aula-pratica/01 - DetectorPesado.alg',
        type: 'alg',
        hasPreview: false,
        description: 'Uso de procedimentos para modularizar a interface e registrar a pessoa de maior peso.'
    },
    {
        id: 'vis-cinema',
        track: 'visualg',
        category: 'Aulas Curso em Vídeo',
        title: 'Reserva de Cadeiras de Cinema',
        path: 'Portugol-Visualg/algoritmos-cursoemvideo/exercicios/aula14/exercicios-prontos/e03-LugaresCinema.alg',
        type: 'alg',
        hasPreview: false,
        description: 'Mapeamento de fileiras e cadeiras reservadas em um vetor com verificação de disponibilidade.'
    },
    {
        id: 'vis-fibonacci',
        track: 'visualg',
        category: 'Aulas Curso em Vídeo',
        title: 'Sequência de Fibonacci',
        path: 'Portugol-Visualg/algoritmos-cursoemvideo/exercicios/aula11/exercicios-prontos/01 - fibonacci.alg',
        type: 'alg',
        hasPreview: false,
        description: 'Gera os termos clássicos da série de Fibonacci com controle de variáveis auxiliares.'
    },

    // ==================== PORTUGOL WEBSTUDIO ====================
    {
        id: 'web-jogo-da-velha',
        track: 'webstudio',
        category: 'Desafios EBAC',
        title: 'Jogo da Velha',
        path: 'Portugol-Webstudio/jogo-da-velha.por',
        type: 'por',
        hasPreview: false,
        description: 'Implementação do jogo da velha no Portugol Webstudio com matriz, validações de vitória e empate.'
    },
    {
        id: 'web-conversor-dolar',
        track: 'webstudio',
        category: 'Desafios EBAC',
        title: 'Conversor de Moedas (Dólar / Real)',
        path: 'Portugol-Webstudio/conversor-dolar-real.por',
        type: 'por',
        hasPreview: false,
        description: 'Lê cotação e valor desejado, convertendo valores com formatação de casas decimais.'
    },
    {
        id: 'web-lista-convidados',
        track: 'webstudio',
        category: 'Desafios EBAC',
        title: 'Gerenciador de Lista de Convidados',
        path: 'Portugol-Webstudio/lista-de-convidados.por',
        type: 'por',
        hasPreview: false,
        description: 'Cadastro, contagem e verificação de convidados utilizando estruturas de repetição e vetores.'
    },
    {
        id: 'web-soma-matrizes',
        track: 'webstudio',
        category: 'Desafios EBAC',
        title: 'Soma de Matrizes 2x2',
        path: 'Portugol-Webstudio/soma-matrizes-2-2.por',
        type: 'por',
        hasPreview: false,
        description: 'Preenchimento e soma elemento a elemento de duas matrizes bidimensionais.'
    },
    {
        id: 'web-par-impar',
        track: 'webstudio',
        category: 'Desafios EBAC',
        title: 'Verificador de Par ou Ímpar',
        path: 'Portugol-Webstudio/Par-ou-impar.por',
        type: 'por',
        hasPreview: false,
        description: 'Análise de divisibilidade por 2 utilizando operador módulo (%) e desvios condicionais.'
    },
    {
        id: 'web-numero-primo',
        track: 'webstudio',
        category: 'Desafios EBAC',
        title: 'Teste de Número Primo (com Enquanto)',
        path: 'Portugol-Webstudio/teste-numero-primo-enquanto.por',
        type: 'por',
        hasPreview: false,
        description: 'Verificação da primalidade de um número natural através de laço enquanto.'
    },
    {
        id: 'web-classificacao-idade',
        track: 'webstudio',
        category: 'Desafios EBAC',
        title: 'Classificação de Idade',
        path: 'Portugol-Webstudio/Verificar-classificação-de-idade.por',
        type: 'por',
        hasPreview: false,
        description: 'Enquadramento de faixas etárias: criança, adolescente, adulto e idoso.'
    },
    {
        id: 'web-triangulo-retangulo',
        track: 'webstudio',
        category: 'Desafios EBAC',
        title: 'Verificador de Triângulo Retângulo',
        path: 'Portugol-Webstudio/verifica-triangulo-retangulo.por',
        type: 'por',
        hasPreview: false,
        description: 'Aplica o Teorema de Pitágoras para verificar se três lados fornecidos formam um triângulo retângulo.'
    },
    {
        id: 'web-compara-usuarios',
        track: 'webstudio',
        category: 'Desafios EBAC',
        title: 'Comparador de Usuários',
        path: 'Portugol-Webstudio/compara-usuarios.por',
        type: 'por',
        hasPreview: false,
        description: 'Compara dados cadastrais de dois usuários diferentes, avaliando igualdades e critérios de precedência.'
    }
];
