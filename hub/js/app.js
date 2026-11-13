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
        <span class="exercise-type-tag">${ex.type}</span>
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

    // 1. Botão Baixar Arquivo
    const downloadBtn = document.createElement('button');
    downloadBtn.className = 'btn-pill';
    downloadBtn.innerHTML = `${ICONS.download} <span>Baixar Arquivo</span>`;
    downloadBtn.addEventListener('click', () => downloadFile(exercise.path));
    dom.actionButtons.appendChild(downloadBtn);

    // 2. Botão Copiar Código
    const copyBtn = document.createElement('button');
    copyBtn.className = 'btn-pill';
    copyBtn.innerHTML = `${ICONS.copy} <span>Copiar Código</span>`;
    copyBtn.addEventListener('click', () => copyCurrentCode());
    dom.actionButtons.appendChild(copyBtn);

    // 3. Botão Nova Aba (para HTML/JS)
    if (exercise.type === 'html') {
        const openTabLink = document.createElement('a');
        openTabLink.className = 'btn-pill';
        openTabLink.href = exercise.path;
        openTabLink.target = '_blank';
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
    // Caso A: JavaScript / HTML nativo
    if (exercise.type === 'html') {
        const iframe = document.createElement('iframe');
        iframe.className = 'preview-iframe';
        iframe.src = exercise.path;
        dom.frameContainer.appendChild(iframe);
        return;
    }

    // Caso B: PHP (Execução via PHP-WASM no navegador)
    if (exercise.type === 'php') {
        renderPhpRunnerView(exercise);
        return;
    }

    // Caso C: Portugol (Visualg / Webstudio) — Sem visualização HTML
    renderPortugolInfoView(exercise);
}

/**
 * Renderiza a tela de visualização de código formatado
 */
async function renderCodeView(exercise) {
    dom.frameContainer.innerHTML = `
    <div class="code-viewer-container">
      <div class="code-header">
        <span style="display: inline-flex; align-items: center; gap: 0.4rem;">${ICONS.file} ${exercise.path}</span>
        <button class="btn-pill" id="code-copy-action-btn" style="padding: 0.3rem 0.8rem; font-size: 0.75rem;">
          ${ICONS.copy} <span>Copiar</span>
        </button>
      </div>
      <div class="code-pre-wrapper">
        <pre><code id="code-content-block">Carregando código...</code></pre>
      </div>
    </div>
  `;

    document.getElementById('code-copy-action-btn')?.addEventListener('click', copyCurrentCode);

    try {
        const response = await fetch(exercise.path);
        if (!response.ok) throw new Error('Falha ao ler arquivo local.');
        const code = await response.text();
        state.currentCodeContent = code;

        const codeBlock = document.getElementById('code-content-block');
        if (codeBlock) {
            codeBlock.textContent = code;

            // Mapeia linguagem para o Prism.js
            let prismLang = 'javascript';
            if (exercise.type === 'php') prismLang = 'php';
            else if (exercise.type === 'html') prismLang = 'markup';
            else if (exercise.type === 'alg' || exercise.type === 'por') prismLang = 'clike';

            codeBlock.className = `language-${prismLang}`;
            try {
                if (window.Prism) {
                    window.Prism.highlightElement(codeBlock);
                }
            } catch (prismErr) {
                console.warn('Aviso no Prism highlight:', prismErr);
            }
        }
    } catch (err) {
        const codeBlock = document.getElementById('code-content-block');
        if (codeBlock) {
            codeBlock.textContent = `// Erro ao carregar código: ${err.message}\n// Caminho: ${exercise.path}`;
        }
    }
}

/**
 * Renderiza o painel do PHP-WASM Runner
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
          <span id="php-status-text">Inicializando motor PHP WebAssembly...</span>
        </div>
      </div>
    </div>
  `;

    const statusText = document.getElementById('php-status-text');
    const outputArea = document.getElementById('php-output-area');
    const runBtn = document.getElementById('php-run-btn');
    const queryInput = document.getElementById('php-query-input');

    const runScript = async () => {
        try {
            if (statusText) statusText.textContent = 'Lendo script PHP...';
            const fileRes = await fetch(exercise.path);
            const phpCode = await fileRes.text();
            state.currentCodeContent = phpCode;

            if (statusText) statusText.textContent = 'Executando script no interpretador WebAssembly...';
            const queryString = queryInput?.value || '';

            const { html } = await executePhpCode(phpCode, queryString);

            // Injeta tag base para que CSS (css/estilo.css) e imagens relativas funcionem no iframe
            const exerciseDir = exercise.path.substring(0, exercise.path.lastIndexOf('/') + 1);
            let finalHtml = html;
            if (finalHtml.includes('<head>')) {
                finalHtml = finalHtml.replace('<head>', `<head><base href="./${exerciseDir}">`);
            } else if (finalHtml.includes('<html>')) {
                finalHtml = finalHtml.replace('<html>', `<html><head><base href="./${exerciseDir}"></head>`);
            } else {
                finalHtml = `<base href="./${exerciseDir}">` + finalHtml;
            }

            // Renderiza a saída em um iframe seguro
            outputArea.innerHTML = `<iframe class="preview-iframe" id="php-result-frame"></iframe>`;
            const iframe = document.getElementById('php-result-frame');
            if (iframe && iframe.contentWindow) {
                iframe.contentWindow.document.open();
                iframe.contentWindow.document.write(finalHtml);
                iframe.contentWindow.document.close();
            }
        } catch (err) {
            outputArea.innerHTML = `
        <div style="padding: 2.5rem; text-align: center; color: var(--text-secondary);">
          <div style="margin-bottom: 0.75rem;">${ICONS.alert}</div>
          <h4 style="color: var(--text-primary); margin-bottom: 0.5rem;">Aviso de Execução PHP</h4>
          <p style="font-size: 0.9rem; margin-bottom: 1.5rem; max-width: 500px; margin-inline: auto;">
            Não foi possível carregar o interpretador WebAssembly online neste momento (${err.message}).
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
        }
    };

    runBtn?.addEventListener('click', runScript);
    runScript();
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
 * Faz download de um arquivo do repositório
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
 * Copia o código atual para a área de transferência
 */
async function copyCurrentCode() {
    const exercise = EXERCISES.find(ex => ex.id === state.currentExerciseId);
    if (!exercise) return;

    try {
        if (!state.currentCodeContent) {
            const res = await fetch(exercise.path);
            state.currentCodeContent = await res.text();
        }
        await navigator.clipboard.writeText(state.currentCodeContent);
        showToast('Código copiado para a área de transferência!');
    } catch (err) {
        showToast('Erro ao copiar código.');
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
