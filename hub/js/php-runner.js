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
 * @returns {Promise<{ html: string, rawText: string }>}
 */
export async function executePhpCode(phpCode, queryString = '') {
    const php = await initPhpEngine();

    let output = '';
    const onOutput = (event) => {
        const text = Array.isArray(event.detail) ? event.detail.join('') : String(event.detail || '');
        output += text;
    };

    php.addEventListener('output', onOutput);

    // Prepara injeção de parâmetros GET se fornecidos
    let preparedCode = phpCode;
    if (queryString && queryString.trim() !== '') {
        const cleanQuery = queryString.replace(/^\?/, '').replace(/'/g, "\\'");
        const shim = `<?php parse_str('${cleanQuery}', $_GET); $_REQUEST = array_merge($_REQUEST, $_GET); ?>\n`;
        preparedCode = shim + preparedCode;
    }

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
