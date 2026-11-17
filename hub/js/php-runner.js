/**
 * Executor client-side de PHP via WebAssembly (php-wasm)
 * Executa scripts PHP diretamente na memória do navegador do visitante sem necessidade de servidor Apache/PHP local.
 */

let phpInstance = null;
let isLoading = false;
let loadError = null;

/**
 * Inicializa a instância do interpretador PHP em WebAssembly
 */
export async function initPhpEngine(onProgress = () => { }) {
    if (phpInstance) return phpInstance;

    if (isLoading) {
        while (isLoading) {
            await new Promise(r => setTimeout(r, 150));
        }
        if (phpInstance) return phpInstance;
        throw loadError || new Error('Falha ao inicializar o interpretador PHP.');
    }

    isLoading = true;
    onProgress('Baixando motor PHP WebAssembly via CDN...');

    try {
        // Importa o módulo oficial do php-wasm (com fallback caso um CDN falhe)
        let module;
        try {
            module = await import('https://cdn.jsdelivr.net/npm/php-wasm/PhpWeb.mjs');
        } catch (cdnErr) {
            console.warn('Falha no jsDelivr, tentando fallback via unpkg...', cdnErr);
            module = await import('https://unpkg.com/php-wasm/PhpWeb.mjs');
        }

        const { PhpWeb } = module;
        onProgress('Carregando binário WebAssembly do PHP 8.2...');

        // Instancia o PHP Web usando a versão 8.2 estável
        phpInstance = new PhpWeb({ version: '8.2' });

        // Aquece o motor inicializando o binário
        await phpInstance.run('<?php echo ""; ?>');

        onProgress('PHP WebAssembly pronto para execução!');
        isLoading = false;
        return phpInstance;
    } catch (err) {
        console.error('Erro ao inicializar PHP-WASM:', err);
        loadError = err;
        isLoading = false;
        throw err;
    }
}

/**
 * Executa o código PHP fornecido e retorna o HTML/texto de saída
 * @param {string} phpCode Código PHP do arquivo
 * @param {string} queryString Opcional (ex: "num=7&inicio=1&fim=10")
 * @param {string} currentFilePath Caminho do arquivo atual para resolução de includes/requires
 * @returns {Promise<{ html: string, rawText: string }>}
 */
export async function executePhpCode(phpCode, queryString = '', currentFilePath = '') {
    let php = await initPhpEngine();

    // Reseta o estado do interpretador para limpar funções, constantes e variáveis anteriores,
    // garantindo execução limpa por requisição e evitando erros de redeclaração (Cannot redeclare).
    try {
        await php.refresh();
    } catch (refreshErr) {
        console.warn('Aviso ao resetar runtime PHP-WASM, recriando instância...', refreshErr);
        phpInstance = null;
        php = await initPhpEngine();
    }

    // Pré-carrega no sistema de arquivos virtual do php-wasm qualquer arquivo referenciado via include/require
    if (currentFilePath && (phpCode.includes('include') || phpCode.includes('require'))) {
        const currentDir = currentFilePath.substring(0, currentFilePath.lastIndexOf('/') + 1);
        const includeRegex = /(?:include|require)(?:_once)?\s*['"]([^'"]+)['"]/g;
        let match;
        while ((match = includeRegex.exec(phpCode)) !== null) {
            const includedFileName = match[1];
            try {
                const targetUrl = currentDir + includedFileName;
                const incRes = await fetch(targetUrl);
                if (incRes.ok) {
                    const incCode = await incRes.text();
                    await php.writeFile(includedFileName, incCode);
                    await php.writeFile('/' + includedFileName, incCode);
                }
            } catch (incErr) {
                console.warn(`Aviso ao sincronizar include "${includedFileName}":`, incErr);
            }
        }
    }

    let output = '';
    const onOutput = (event) => {
        const text = Array.isArray(event.detail) ? event.detail.join('') : String(event.detail || '');
        output += text;
    };

    php.addEventListener('output', onOutput);

    // Prepara injeção de parâmetros GET/POST se fornecidos
    let preparedCode = phpCode;
    let shim = `<?php ini_set('display_errors', '1'); ?>\n`;

    if (queryString && queryString.trim() !== '') {
        const cleanQuery = queryString.replace(/^\?/, '').replace(/'/g, "\\'");
        shim += `<?php parse_str('${cleanQuery}', $_GET); parse_str('${cleanQuery}', $_POST); $_REQUEST = array_merge($_REQUEST, $_GET, $_POST); ?>\n`;
    }
    preparedCode = shim + preparedCode;

    try {
        await php.run(preparedCode);
    } finally {
        php.removeEventListener('output', onOutput);
    }

    return {
        rawText: output,
        html: output
    };
}
