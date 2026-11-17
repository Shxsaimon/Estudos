/**
 * Lógica principal da aplicação Hub de Estudos
 * Autor: Saimon Furigo (@shxsaimon)
 */

import { TRACKS, EXERCISES } from './data.js';
import { executePhpCode } from './php-runner.js';
import { ICONS } from './icons.js';

// Estado global da aplicação
const state = {
    currentTrack: 'js',
    currentExerciseId: null,
    currentView: 'preview', // 'preview' | 'code'
    searchTerm: '',
    theme: localStorage.getItem('hub-theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
    currentCodeContent: ''
};

// Elementos DOM
const dom = {
    themeToggleBtn: document.getElementById('theme-toggle-btn'),
    tracksNav: document.getElementById('tracks-nav'),
    searchInput: document.getElementById('search-input'),
    sidebarList: document.getElementById('sidebar-list'),
    contentTitle: document.getElementById('content-title'),
    contentCategory: document.getElementById('content-category'),
    contentPath: document.getElementById('content-path'),
    contentDesc: document.getElementById('content-desc'),
    viewPreviewBtn: document.getElementById('view-preview-btn'),
    viewCodeBtn: document.getElementById('view-code-btn'),
    actionButtons: document.getElementById('action-buttons'),
    frameContainer: document.getElementById('frame-container'),
    toast: document.getElementById('hub-toast')
};

/**
 * Inicialização dos ícones estáticos no cabeçalho e busca
 */
function initStaticIcons() {
    const ghLink = document.getElementById('hub-github-link');
    if (ghLink) {
        ghLink.innerHTML = `${ICONS.github} <span>GitHub</span>`;
    }
    const searchIconSlot = document.getElementById('search-icon-slot');
    if (searchIconSlot) {
        searchIconSlot.innerHTML = ICONS.search;
    }
}

/**
 * Inicialização da aplicação
 */
function init() {
    initStaticIcons();
    applyTheme(state.theme);
    setupEventListeners();
    renderTracksNav();
    selectTrack('js');
}

/**
 * Aplica o tema (dark / light)
 */
function applyTheme(theme) {
    state.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('hub-theme', theme);

    if (dom.themeToggleBtn) {
        dom.themeToggleBtn.innerHTML = theme === 'dark'
            ? `${ICONS.sun} <span>Modo Claro</span>`
            : `${ICONS.moon} <span>Modo Escuro</span>`;
    }
}

/**
 * Configura listeners de eventos globais
 */
function setupEventListeners() {
    // Alternador de tema
    dom.themeToggleBtn?.addEventListener('click', () => {
        applyTheme(state.theme === 'dark' ? 'light' : 'dark');
    });

    // Busca em tempo real
    dom.searchInput?.addEventListener('input', (e) => {
        state.searchTerm = e.target.value.toLowerCase().trim();
        renderSidebarList();
    });

    // Alternador de visualização (Quadro x Código)
    dom.viewPreviewBtn?.addEventListener('click', () => {
        if (state.currentView !== 'preview') {
            state.currentView = 'preview';
            updateViewSwitcher();
            renderFrame();
        }
    });

    dom.viewCodeBtn?.addEventListener('click', () => {
        if (state.currentView !== 'code') {
            state.currentView = 'code';
            updateViewSwitcher();
            renderFrame();
        }
    });
}

/**
 * Renderiza a barra de abas de trilhas
 */
function renderTracksNav() {
    dom.tracksNav.innerHTML = '';

    Object.values(TRACKS).forEach(track => {
        const count = EXERCISES.filter(ex => ex.track === track.id).length;
        const btn = document.createElement('button');
        btn.className = `track-tab ${state.currentTrack === track.id ? 'active' : ''}`;
        const iconSvg = ICONS[track.icon] || '';
        btn.innerHTML = `<span class="track-tab-icon">${iconSvg}</span> <span>${track.name}</span> <span class="count">${count}</span>`;
        btn.addEventListener('click', () => selectTrack(track.id));
        dom.tracksNav.appendChild(btn);
    });
}

/**
 * Seleciona uma trilha
 */
function selectTrack(trackId) {
    state.currentTrack = trackId;
    state.searchTerm = '';
    if (dom.searchInput) dom.searchInput.value = '';

    // Atualiza abas visuais
    document.querySelectorAll('.track-tab').forEach((tab, index) => {
        const trackKeys = Object.keys(TRACKS);
        tab.classList.toggle('active', trackKeys[index] === trackId);
    });

    // Filtra exercícios da trilha
    const trackExercises = EXERCISES.filter(ex => ex.track === trackId);
    renderSidebarList();

    if (trackExercises.length > 0) {
        selectExercise(trackExercises[0].id);
    }
}

/**
 * Renderiza a lista lateral de exercícios agrupados por categoria
 */
function renderSidebarList() {
    const filtered = EXERCISES.filter(ex => {
        const matchTrack = ex.track === state.currentTrack;
        const matchSearch = state.searchTerm === '' ||
            ex.title.toLowerCase().includes(state.searchTerm) ||
            ex.category.toLowerCase().includes(state.searchTerm) ||
            ex.path.toLowerCase().includes(state.searchTerm);
        return matchTrack && matchSearch;
    });

    if (filtered.length === 0) {
        dom.sidebarList.innerHTML = `
      <div style="padding: 2rem 1rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
        Nenhum exercício encontrado.
      </div>`;
        return;
    }

    // Agrupa por categoria
    const groups = {};
    filtered.forEach(ex => {
        if (!groups[ex.category]) groups[ex.category] = [];
        groups[ex.category].push(ex);
    });

    dom.sidebarList.innerHTML = '';

    Object.entries(groups).forEach(([category, items]) => {
        const groupDiv = document.createElement('div');
        groupDiv.className = 'category-group';

        const titleDiv = document.createElement('div');
        titleDiv.className = 'category-title';
        titleDiv.textContent = category;
        groupDiv.appendChild(titleDiv);

        items.forEach(ex => {
            const itemBtn = document.createElement('button');
            itemBtn.className = `exercise-item ${state.currentExerciseId === ex.id ? 'active' : ''}`;
            itemBtn.innerHTML = `
        <span class="exercise-item-title">${ex.title}</span>
        <span class="exercise-type-tag ${ex.type}">${ex.type}</span>
      `;
            itemBtn.addEventListener('click', () => selectExercise(ex.id));
            groupDiv.appendChild(itemBtn);
        });

        dom.sidebarList.appendChild(groupDiv);
    });
}

/**
 * Seleciona um exercício e atualiza o quadro
 */
function selectExercise(exerciseId) {
    const exercise = EXERCISES.find(ex => ex.id === exerciseId);
    if (!exercise) return;

    state.currentExerciseId = exerciseId;

    // Atualiza classes ativas na lista lateral
    document.querySelectorAll('.exercise-item').forEach(btn => {
        const title = btn.querySelector('.exercise-item-title')?.textContent;
        btn.classList.toggle('active', title === exercise.title);
    });

    // Atualiza cabeçalho do conteúdo
    dom.contentTitle.textContent = exercise.title;
    dom.contentCategory.textContent = exercise.category;
    dom.contentPath.textContent = exercise.path;
    dom.contentDesc.textContent = exercise.description;

    // Se o exercício for Portugol (sem preview visual DOM), o padrão pode ir para código
    if (!exercise.hasPreview && state.currentView === 'preview') {
        state.currentView = 'code';
    } else if (exercise.hasPreview && state.currentView === 'preview') {
        state.currentView = 'preview';
    }

    updateViewSwitcher();
    renderActionButtons(exercise);
    renderFrame();
}

/**
 * Atualiza o estado visual dos botões de alternância (Visualizar x Código)
 */
function updateViewSwitcher() {
    const exercise = EXERCISES.find(ex => ex.id === state.currentExerciseId);
    const isPreview = state.currentView === 'preview';

    dom.viewPreviewBtn.classList.toggle('active', isPreview);
    dom.viewCodeBtn.classList.toggle('active', !isPreview);

    // Se o exercício não tem front visual, ajusta a label ou desabilita
    if (exercise && !exercise.hasPreview) {
        dom.viewPreviewBtn.innerHTML = `${ICONS.info} <span>Informações</span>`;
    } else {
        dom.viewPreviewBtn.innerHTML = `${ICONS.eye} <span>Visualizar</span>`;
    }
    dom.viewCodeBtn.innerHTML = `${ICONS.code} <span>Ver Código</span>`;
}

/**
 * Renderiza os botões de ação dinâmicos do exercício selecionado
 */
function renderActionButtons(exercise) {
    dom.actionButtons.innerHTML = '';

    const hasSeparateScripts = exercise.scripts && exercise.scripts.length > 0;

    // 1. Botão Único de Download
    const downloadBtn = document.createElement('button');
    downloadBtn.className = 'btn-pill';
    downloadBtn.innerHTML = `${ICONS.download} <span>${hasSeparateScripts ? 'Baixar Arquivos (.zip)' : 'Baixar Arquivo'}</span>`;
    downloadBtn.title = hasSeparateScripts ? 'Baixar arquivos empacotados em um .zip' : 'Baixar arquivo do exercício';
    downloadBtn.addEventListener('click', () => downloadExerciseFiles(exercise, downloadBtn));
    dom.actionButtons.appendChild(downloadBtn);

    // 2. Botão Único de Copiar Código (Copia JS + HTML empilhados)
    const copyBtn = document.createElement('button');
    copyBtn.className = 'btn-pill';
    copyBtn.innerHTML = `${ICONS.copy} <span>Copiar Código</span>`;
    copyBtn.title = hasSeparateScripts ? 'Copiar código completo' : 'Copiar código-fonte';
    copyBtn.addEventListener('click', () => copyCurrentCode(copyBtn));
    dom.actionButtons.appendChild(copyBtn);

    // 3. Botão Nova Aba (para exercícios com visualização web / iframe nativo)
    const hasWebPreview = exercise.hasPreview && exercise.track !== 'php' && (
        exercise.track === 'js' ||
        exercise.type === 'html' ||
        exercise.type === 'js'
    );
    if (hasWebPreview) {
        const openTabLink = document.createElement('a');
        openTabLink.className = 'btn-pill';
        openTabLink.href = exercise.path;
        openTabLink.target = '_blank';
        openTabLink.title = 'Abrir exercício em tela cheia numa nova aba';
        openTabLink.innerHTML = `${ICONS.external} <span>Nova Aba</span>`;
        dom.actionButtons.appendChild(openTabLink);
    }

    // 4. Links externos específicos por trilha
    const track = TRACKS[exercise.track];
    if (track && track.externalLinks) {
        track.externalLinks.forEach(link => {
            const extLink = document.createElement('a');
            extLink.className = 'btn-pill';
            extLink.href = link.url;
            extLink.target = '_blank';
            extLink.innerHTML = `${ICONS.external} <span>${link.label}</span>`;
            dom.actionButtons.appendChild(extLink);
        });
    }
}

/**
 * Renderiza o conteúdo do quadro central
 */
async function renderFrame() {
    const exercise = EXERCISES.find(ex => ex.id === state.currentExerciseId);
    if (!exercise) return;

    dom.frameContainer.innerHTML = '';

    // MODO 1: VER CÓDIGO-FONTE
    if (state.currentView === 'code') {
        await renderCodeView(exercise);
        return;
    }

    // MODO 2: VISUALIZAR EM TELA
    // Caso A: PHP (Execução via PHP-WASM no navegador com interceptação de formulários)
    if (exercise.track === 'php' || exercise.type === 'php') {
        renderPhpRunnerView(exercise);
        return;
    }

    // Caso B: JavaScript / HTML nativo com renderização gráfica em iframe
    const isHtmlOrJsPreview = exercise.hasPreview && (
        exercise.track === 'js' ||
        exercise.type === 'html' ||
        exercise.type === 'js'
    );

    if (isHtmlOrJsPreview) {
        const iframe = document.createElement('iframe');
        iframe.className = 'preview-iframe';
        iframe.src = exercise.path;
        dom.frameContainer.appendChild(iframe);
        return;
    }

    // Caso C: Portugol (Visualg / Webstudio) — Sem visualização HTML
    renderPortugolInfoView(exercise);
}

/**
 * Renderiza a tela de visualização de código formatado (suporta múltiplos arquivos empilhados e seções recolhíveis)
 */
async function renderCodeView(exercise) {
    // Monta a lista de arquivos a serem exibidos (scripts externos primeiro, depois o HTML principal)
    const files = [];

    if (exercise.scripts && exercise.scripts.length > 0) {
        exercise.scripts.forEach(scriptPath => {
            const ext = scriptPath.split('.').pop()?.toLowerCase();
            let lang = 'javascript';
            let tag = ext.toUpperCase();
            if (ext === 'php') {
                lang = 'php';
                tag = 'PHP';
            } else if (ext === 'html' || ext === 'htm') {
                lang = 'markup';
                tag = 'HTML';
            } else if (ext === 'js') {
                lang = 'javascript';
                tag = 'JS';
            }

            files.push({
                path: scriptPath,
                name: scriptPath.split('/').pop(),
                type: ext,
                tag: tag,
                lang: lang,
                isScript: true
            });
        });
    }

    const mainExt = exercise.path.split('.').pop()?.toLowerCase();
    let mainLang = 'javascript';
    let mainTag = mainExt.toUpperCase();

    if (mainExt === 'html' || mainExt === 'htm') {
        mainLang = 'markup';
        mainTag = 'HTML';
    } else if (mainExt === 'php') {
        mainLang = 'php';
        mainTag = 'PHP';
    } else if (mainExt === 'alg' || mainExt === 'por') {
        mainLang = 'clike';
        mainTag = mainExt.toUpperCase();
    } else if (mainExt === 'js') {
        mainLang = 'javascript';
        mainTag = 'JS';
    }

    files.push({
        path: exercise.path,
        name: exercise.path.split('/').pop(),
        type: mainExt,
        tag: mainTag,
        lang: mainLang,
        isScript: false
    });

    // Renderiza o esqueleto dos blocos no container com cabeçalho recolhível (expandido por padrão)
    dom.frameContainer.innerHTML = `
    <div class="code-viewer-container">
      ${files.map((file, idx) => `
        <div class="code-file-section" id="code-file-section-${idx}">
          <div class="code-header" data-idx="${idx}" role="button" tabindex="0" title="Clique para recolher ou expandir">
            <div class="code-header-left">
              <span class="code-toggle-chevron-wrap">${ICONS.chevronDown}</span>
              <span class="code-file-badge ${file.type}">${file.tag}</span>
              <span class="code-file-path" title="${file.path}">${file.path}</span>
            </div>
            <div class="code-header-actions">
              <button class="btn-pill btn-copy-file" data-idx="${idx}" title="Copiar este arquivo">
                ${ICONS.copy} <span>Copiar</span>
              </button>
            </div>
          </div>
          <div class="code-pre-wrapper">
            <pre><code id="code-block-${idx}" class="language-${file.lang}">Carregando ${file.name}...</code></pre>
          </div>
        </div>
      `).join('')}
    </div>
  `;

    // Registra eventos de recolher/expandir em cada seção de arquivo
    document.querySelectorAll('.code-file-section').forEach(section => {
        const header = section.querySelector('.code-header');
        if (!header) return;

        const toggleCollapse = (e) => {
            // Ignora se o clique foi em um botão dentro das ações
            if (e.target.closest('.code-header-actions')) return;
            section.classList.toggle('collapsed');
        };

        header.addEventListener('click', toggleCollapse);
        header.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                if (e.target.closest('.code-header-actions')) return;
                e.preventDefault();
                section.classList.toggle('collapsed');
            }
        });
    });

    // Carrega o conteúdo dos arquivos de forma concorrente via fetch
    try {
        const loadedFiles = await Promise.all(files.map(async (file) => {
            try {
                const response = await fetch(file.path);
                if (!response.ok) throw new Error(`Status HTTP ${response.status}`);
                const code = await response.text();
                return { ...file, content: code, error: null };
            } catch (err) {
                return {
                    ...file,
                    content: `// Erro ao carregar arquivo: ${err.message}\n// Caminho: ${file.path}`,
                    error: err
                };
            }
        }));

        // Atualiza a referência global de cópia (dá preferência ao script de lógica)
        const mainScript = loadedFiles.find(f => f.isScript);
        state.currentCodeContent = mainScript ? mainScript.content : (loadedFiles[0]?.content || '');

        // Preenche cada bloco e aplica o Prism highlight
        loadedFiles.forEach((file, idx) => {
            const codeBlock = document.getElementById(`code-block-${idx}`);
            if (codeBlock) {
                codeBlock.textContent = file.content;
                codeBlock.className = `language-${file.lang}`;

                try {
                    if (window.Prism) {
                        window.Prism.highlightElement(codeBlock);
                    }
                } catch (prismErr) {
                    console.warn(`Aviso no Prism highlight para ${file.path}:`, prismErr);
                }
            }

            // Ação de cópia do arquivo individual
            const copyBtn = document.querySelector(`.btn-copy-file[data-idx="${idx}"]`);
            if (copyBtn) {
                copyBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    copySingleFileCode(file.content, copyBtn);
                });
            }
        });
    } catch (err) {
        console.error('Erro ao renderizar visualização de código:', err);
    }
}

/**
 * Renderiza o painel do PHP-WASM Runner com suporte completo a formulários interativos e navegação interna
 */
async function renderPhpRunnerView(exercise) {
    dom.frameContainer.innerHTML = `
    <div class="php-runner-panel">
      <div class="php-params-bar">
        <span style="display: inline-flex; align-items: center; gap: 0.4rem; font-size: 0.85rem; font-weight: 600; color: var(--text-secondary);">${ICONS.sliders} Parâmetros GET:</span>
        <input type="text" id="php-query-input" class="php-params-input" placeholder="ex: num=7&inicio=1&fim=10" />
        <button class="btn-pill btn-primary" id="php-run-btn" style="padding: 0.45rem 1rem; font-size: 0.8rem;">
          ${ICONS.play} <span>Re-executar</span>
        </button>
      </div>
      <div id="php-output-area" style="flex: 1; display: flex; flex-direction: column;">
        <div class="php-status-loading">
          <div class="spinner"></div>
          <span id="php-status-text">Inicializando ambiente PHP WebAssembly...</span>
        </div>
      </div>
    </div>
  `;

    const outputArea = document.getElementById('php-output-area');
    const runBtn = document.getElementById('php-run-btn');
    const queryInput = document.getElementById('php-query-input');

    // Identifica o script PHP principal do exercício
    const mainPhpScript = (exercise.scripts && exercise.scripts.length > 0)
        ? exercise.scripts[0]
        : exercise.path;

    let currentLoadedFilePath = exercise.path;

    // Helper para exibir erro com opção de fallback
    const showError = (err) => {
        if (!outputArea) return;
        outputArea.innerHTML = `
      <div style="padding: 2.5rem; text-align: center; color: var(--text-secondary);">
        <div style="margin-bottom: 0.75rem;">${ICONS.alert}</div>
        <h4 style="color: var(--text-primary); margin-bottom: 0.5rem;">Aviso de Execução PHP</h4>
        <p style="font-size: 0.9rem; margin-bottom: 1.5rem; max-width: 500px; margin-inline: auto;">
          ${err.message || 'Erro durante o processamento do script.'}
        </p>
        <div style="display: flex; gap: 0.75rem; justify-content: center;">
          <button class="btn-pill btn-primary" id="fallback-view-code-btn">${ICONS.code} <span>Ver Código-Fonte</span></button>
        </div>
      </div>
    `;
        document.getElementById('fallback-view-code-btn')?.addEventListener('click', () => {
            state.currentView = 'code';
            updateViewSwitcher();
            renderFrame();
        });
    };

    /**
     * Resolve caminhos relativos considerando ../ e ./ de forma agnóstica de host
     */
    const resolveRelativePath = (baseDir, relativePath) => {
        if (!relativePath || relativePath.startsWith('/') || relativePath.startsWith('http://') || relativePath.startsWith('https://')) {
            return relativePath;
        }
        const full = baseDir + relativePath;
        const parts = full.split('/');
        const resolved = [];
        for (const part of parts) {
            if (part === '.' || part === '') continue;
            if (part === '..') {
                resolved.pop();
            } else {
                resolved.push(part);
            }
        }
        return resolved.join('/');
    };

    /**
     * Anexa interceptores a formulários e links para manter navegação 100% client-side (sem download acidental)
     */
    const attachInterceptors = (iframeDoc, currentDirPath) => {
        if (!iframeDoc) return;

        // 1. Intercepta submissões de formulário (<form>) no documento do iframe via captura
        iframeDoc.addEventListener('submit', (e) => {
            const form = e.target;
            if (!form || form.tagName !== 'FORM') return;

            e.preventDefault();
            e.stopPropagation();

            const actionAttr = form.getAttribute('action') || '';
            const [actionFile, actionQuery] = actionAttr.split('?');

            // Extrai dados preenchidos no formulário
            const formData = new FormData(form);
            const searchParams = new URLSearchParams();
            if (actionQuery) {
                new URLSearchParams(actionQuery).forEach((v, k) => searchParams.append(k, v));
            }
            for (const [key, val] of formData.entries()) {
                searchParams.append(key, val);
            }
            const queryString = searchParams.toString();

            const targetPath = (actionFile && actionFile !== '#')
                ? resolveRelativePath(currentDirPath, actionFile)
                : currentLoadedFilePath;

            loadAndRender(targetPath, queryString);
        }, true);

        // 2. Intercepta cliques em links locais (ex: botão "Voltar") no documento do iframe via captura
        iframeDoc.addEventListener('click', (e) => {
            const link = e.target.closest('a[href]');
            if (!link) return;

            const href = link.getAttribute('href');
            if (!href || href.startsWith('http://') || href.startsWith('https://') || href.startsWith('#') || href.startsWith('mailto:')) {
                return;
            }

            e.preventDefault();
            e.stopPropagation();

            const [urlPath, query] = href.split('?');
            const targetPath = resolveRelativePath(currentDirPath, urlPath);
            loadAndRender(targetPath, query || '');
        }, true);
    };

    /**
     * Renderiza o HTML final no iframe e injeta a tag base para resolução correta de CSS/imagens
     */
    const writeToIframe = (htmlContent, currentDirPath) => {
        let finalHtml = htmlContent;
        const baseTag = `<base href="./${currentDirPath}">`;

        if (finalHtml.includes('<head>')) {
            finalHtml = finalHtml.replace('<head>', `<head>${baseTag}`);
        } else if (finalHtml.includes('<html>')) {
            finalHtml = finalHtml.replace('<html>', `<html><head>${baseTag}</head>`);
        } else {
            finalHtml = `<head>${baseTag}</head>` + finalHtml;
        }

        let iframe = document.getElementById('php-result-frame');
        if (!iframe) {
            outputArea.innerHTML = `<iframe class="preview-iframe" id="php-result-frame"></iframe>`;
            iframe = document.getElementById('php-result-frame');
        }

        if (iframe && iframe.contentWindow) {
            const doc = iframe.contentWindow.document;
            doc.open();
            doc.write(finalHtml);
            doc.close();

            // Adiciona ouvintes para interações posteriores
            attachInterceptors(doc, currentDirPath);
        }
    };

    /**
     * Carrega e processa qualquer arquivo do exercício (.html ou .php via php-wasm)
     */
    const loadAndRender = async (filePath, queryString = '') => {
        currentLoadedFilePath = filePath;

        if (queryInput) {
            queryInput.value = queryString;
        }

        if (runBtn) {
            runBtn.disabled = true;
            const btnSpan = runBtn.querySelector('span');
            if (btnSpan) btnSpan.textContent = 'Executando...';
        }

        try {
            const currentDir = filePath.substring(0, filePath.lastIndexOf('/') + 1);
            const isPhp = filePath.endsWith('.php');

            const fileRes = await fetch(filePath);
            if (!fileRes.ok) throw new Error(`Falha ao ler "${filePath}" (HTTP ${fileRes.status})`);
            const fileContent = await fileRes.text();

            let renderedHtml = '';
            if (isPhp) {
                state.currentCodeContent = fileContent;
                const { html } = await executePhpCode(fileContent, queryString, filePath);
                renderedHtml = html;
            } else {
                renderedHtml = fileContent;
            }

            writeToIframe(renderedHtml, currentDir);
        } catch (err) {
            console.error('Erro no PHP Runner:', err);
            showError(err);
        } finally {
            if (runBtn) {
                runBtn.disabled = false;
                const btnSpan = runBtn.querySelector('span');
                if (btnSpan) btnSpan.textContent = 'Re-executar';
            }
        }
    };

    // Botão Re-executar na barra superior
    runBtn?.addEventListener('click', () => {
        const query = queryInput?.value || '';
        loadAndRender(mainPhpScript, query);
    });

    // Ponto de entrada inicial do exercício (HTML de formulário ou PHP direto)
    loadAndRender(exercise.path, queryInput?.value || '');
}

/**
 * Renderiza o painel informativo para Portugol (sem DOM visual)
 */
function renderPortugolInfoView(exercise) {
    const isWebstudio = exercise.track === 'webstudio';
    const toolName = isWebstudio ? 'Portugol Webstudio' : 'Visualg';
    const toolUrl = isWebstudio ? 'https://portugol.dev' : 'https://visualg.dev';

    dom.frameContainer.innerHTML = `
    <div class="portugol-info-panel">
      <div class="portugol-info-icon">
        ${isWebstudio ? ICONS.webstudio : ICONS.visualg}
      </div>
      <h3>Código em Pseudocódigo / Algoritmo</h3>
      <p>
        Este exercício foi desenvolvido em <strong>${toolName}</strong> (.${exercise.type}). 
        Algoritmos em Portugol são executados via console/terminal da própria ferramenta e não possuem renderização gráfica em HTML.
      </p>
      <div class="portugol-actions-group">
        <button class="btn-pill btn-primary" id="portugol-view-code-btn">
          ${ICONS.code} <span>Ver Código Completo</span>
        </button>
        <button class="btn-pill" id="portugol-download-btn">
          ${ICONS.download} <span>Baixar .${exercise.type}</span>
        </button>
        <a class="btn-pill" href="${toolUrl}" target="_blank">
          ${ICONS.external} <span>Abrir ${toolName}</span>
        </a>
      </div>
    </div>
  `;

    document.getElementById('portugol-view-code-btn')?.addEventListener('click', () => {
        state.currentView = 'code';
        updateViewSwitcher();
        renderFrame();
    });

    document.getElementById('portugol-download-btn')?.addEventListener('click', () => {
        downloadFile(exercise.path);
    });
}

/**
 * Realiza o download dos arquivos do exercício.
 * Se houver múltiplos arquivos (ex: HTML + JS), gera um .zip contendo a estrutura.
 * Se houver apenas um arquivo, baixa-o diretamente.
 */
async function downloadExerciseFiles(exercise, btnElement) {
    const hasMultiple = exercise.scripts && exercise.scripts.length > 0;

    // Se for arquivo único, faz o download direto
    if (!hasMultiple) {
        return downloadFile(exercise.path);
    }

    const span = btnElement?.querySelector('span');
    const origText = span ? span.textContent : 'Baixar Arquivos (.zip)';

    try {
        if (span) span.textContent = 'Gerando .zip...';
        showToast('Preparando pacote .zip para download...');

        // Lista de arquivos a empacotar
        const filesToZip = [];
        exercise.scripts.forEach(s => filesToZip.push(s));
        filesToZip.push(exercise.path);

        // Fallback se o JSZip não estiver carregado
        if (typeof window.JSZip === 'undefined') {
            console.warn('JSZip não carregado, iniciando download individual.');
            for (const filePath of filesToZip) {
                await downloadFile(filePath);
            }
            if (span) span.textContent = origText;
            return;
        }

        const zip = new window.JSZip();
        const baseDir = exercise.path.substring(0, exercise.path.lastIndexOf('/') + 1);

        // Busca conteúdo de todos os arquivos concorrentemente
        await Promise.all(filesToZip.map(async (filePath) => {
            const res = await fetch(filePath);
            if (!res.ok) throw new Error(`Falha ao ler ${filePath} (Status: ${res.status})`);
            const blob = await res.blob();

            // Determina caminho relativo dentro do zip para preservar referências
            let relativePath = filePath;
            if (filePath.startsWith(baseDir)) {
                relativePath = filePath.slice(baseDir.length);
            } else {
                relativePath = filePath.split('/').pop() || 'arquivo';
            }

            zip.file(relativePath, blob);
        }));

        const zipBlob = await zip.generateAsync({
            type: 'blob',
            compression: 'DEFLATE',
            compressionOptions: { level: 6 }
        });

        // Nome do zip baseado no arquivo principal
        const baseName = exercise.path.split('/').pop()?.replace(/\.[^/.]+$/, '') || exercise.id;
        const zipName = `${baseName}.zip`;

        const url = URL.createObjectURL(zipBlob);
        const a = document.createElement('a');
        a.href = url;
        a.download = zipName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        showToast(`Download de "${zipName}" concluído!`);
        if (span) span.textContent = 'Baixado!';
        setTimeout(() => {
            if (span) span.textContent = origText;
        }, 2000);
    } catch (err) {
        console.error('Erro ao gerar .zip:', err);
        showToast(`Erro ao gerar .zip (${err.message}). Tentando download individual...`);

        // Fallback: faz download individual
        for (const filePath of [exercise.path, ...exercise.scripts]) {
            await downloadFile(filePath);
        }

        if (span) span.textContent = origText;
    }
}

/**
 * Faz download de um arquivo individual do repositório
 */
async function downloadFile(filePath) {
    try {
        const res = await fetch(filePath);
        const blob = await res.blob();
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filePath.split('/').pop() || 'arquivo';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        showToast('Download iniciado!');
    } catch (err) {
        showToast('Erro ao baixar arquivo.');
    }
}

/**
 * Copia o conteúdo de um arquivo individual com feedback visual no botão
 */
async function copySingleFileCode(content, btnElement) {
    try {
        await navigator.clipboard.writeText(content);
        const span = btnElement?.querySelector('span');
        const origText = span ? span.textContent : 'Copiar';
        if (span) span.textContent = 'Copiado!';
        btnElement?.classList.add('btn-copied');
        showToast('Código copiado para a área de transferência!');
        setTimeout(() => {
            if (span) span.textContent = origText;
            btnElement?.classList.remove('btn-copied');
        }, 1800);
    } catch (err) {
        showToast('Erro ao copiar código.');
    }
}

/**
 * Copia todo o código do exercício selecionado para a área de transferência.
 * Se houver múltiplos arquivos (ex: JS + HTML), copia o JS primeiro e o HTML abaixo,
 * claramente separados por cabeçalhos de comentário explicativos.
 */
async function copyCurrentCode(btnElement) {
    const exercise = EXERCISES.find(ex => ex.id === state.currentExerciseId);
    if (!exercise) return;

    const span = btnElement?.querySelector('span');
    const origText = span ? span.textContent : 'Copiar Código';

    try {
        const filesToCopy = [];

        // 1. Scripts de lógica primeiro (JS)
        if (exercise.scripts && exercise.scripts.length > 0) {
            exercise.scripts.forEach(scriptPath => {
                filesToCopy.push({
                    path: scriptPath,
                    isHtml: false
                });
            });
        }

        // 2. Arquivo principal abaixo (HTML/PHP/ALG)
        filesToCopy.push({
            path: exercise.path,
            isHtml: exercise.path.endsWith('.html') || exercise.path.endsWith('.htm')
        });

        // Caso de arquivo único
        if (filesToCopy.length === 1) {
            let code = state.currentCodeContent;
            if (!code) {
                const res = await fetch(filesToCopy[0].path);
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                code = await res.text();
                state.currentCodeContent = code;
            }
            await navigator.clipboard.writeText(code);
        } else {
            // Múltiplos arquivos: busca todos e concatena com separadores claros
            const contents = await Promise.all(filesToCopy.map(async (file) => {
                const res = await fetch(file.path);
                if (!res.ok) throw new Error(`HTTP ${res.status} em ${file.path}`);
                const code = await res.text();

                const separator = file.isHtml
                    ? `<!-- ==========================================================================\n   ARQUIVO: ${file.path}\n   ========================================================================== -->`
                    : `/* ==========================================================================\n   ARQUIVO: ${file.path}\n   ========================================================================== */`;

                return `${separator}\n\n${code.trim()}`;
            }));

            const combinedCode = contents.join('\n\n\n');
            await navigator.clipboard.writeText(combinedCode);
        }

        if (span) span.textContent = 'Copiado!';
        btnElement?.classList.add('btn-copied');
        showToast(filesToCopy.length > 1
            ? 'Todos os códigos copiados!'
            : 'Código copiado!'
        );

        setTimeout(() => {
            if (span) span.textContent = origText;
            btnElement?.classList.remove('btn-copied');
        }, 1800);
    } catch (err) {
        console.error('Erro ao copiar código:', err);
        showToast('Erro ao copiar código para a área de transferência.');
    }
}

/**
 * Exibe notificação toast
 */
function showToast(message) {
    if (!dom.toast) return;
    dom.toast.textContent = message;
    dom.toast.classList.add('show');
    setTimeout(() => {
        dom.toast.classList.remove('show');
    }, 2500);
}

// Inicializa quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', init);
