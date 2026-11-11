# 📐 ESPECIFICAÇÃO DE DESIGN — HUB DE ESTUDOS
**Hub de Estudos & Práticas de Programação — Saimon Furigo (@shxsaimon)**
*Versão 1.0 — 11/11/2026*

---

## 1. Visão Geral & Conceito

* **Produto:** Hub de Estudos (Dashboard / Portal Interativo de Aprendizado)
* **Objetivo:** Interface única, responsiva e moderna que unifica, documenta e permite testar e visualizar os exercícios e códigos de quatro vertentes de estudos: **JavaScript**, **PHP**, **Portugol (Visualg)** e **Portugol (Webstudio)**.
* **Inspiração Estética:** Adaptação do design system **Obsidian Kinetic** do portfólio pessoal de Saimon Furigo, ajustada para maior clareza visual e conforto de leitura (Dark & Light modes).

---

## 2. Tipografia

* **Fonte Principal (Interface & Títulos):** `Plus Jakarta Sans`, sans-serif.
  * *Pesos utilizados:* 400 (Regular), 600 (Semi-bold), 700 (Bold), 800 (Extra-bold).
* **Fonte Técnica (Código-fonte, Tags & Métricas):** `JetBrains Mono`, monospace.
  * *Pesos utilizados:* 400 (Regular), 500 (Medium), 700 (Bold).

---

## 3. Cores & Design Tokens

### Modo Escuro (Dark Mode — Padrão)
* **Background Canvas:** `#14121A` (Obsidian suave com nuance berinjela)
* **Superfície / Cartões / Quadro:** `#1C1924`
* **Superfície Elevada / Hover:** `#262232`
* **Borda Padrão:** `rgba(255, 255, 255, 0.08)` / `#2E293B`
* **Texto Primário:** `#F4F0EA` (Warm Off-White, excelente legibilidade)
* **Texto Secundário / Muted:** `#9C93AB` (Lavanda acinzentado)
* **Sombra de Profundidade:** `0 12px 32px -8px rgba(0, 0, 0, 0.5)`

### Modo Claro (Light Mode — Foco em Leitura)
* **Background Canvas:** `#F8F7FA` (Off-white aconchegante com toque lilás sutil)
* **Superfície / Cartões / Quadro:** `#FFFFFF`
* **Superfície Elevada / Hover:** `#F1EFF7`
* **Borda Padrão:** `rgba(22, 20, 29, 0.1)` / `#E5E0EE`
* **Texto Primário:** `#16141D` (Grafite escuro de alto contraste)
* **Texto Secundário / Muted:** `#6B6478` (Cinza neutro suave)
* **Sombra de Profundidade:** `0 8px 24px -4px rgba(22, 20, 29, 0.08)`

### Cores de Marca & Acentos
* **Electric Violet (Primária):** `#6F00FF`
* **Neon Magenta / Orchid (Secundária):** `#8129D9`
* **Gradiente de Destaque:** `linear-gradient(135deg, #6F00FF 0%, #8129D9 100%)`
* **Glow Eletrostático:** `rgba(111, 0, 255, 0.25)`

### Identidade de Cada Trilha (Badges & Chips)
* **🟨 JavaScript:** `#F7DF1E` (accent border & pill)
* **🐘 PHP:** `#8892BF` (accent border & pill)
* **🧩 Portugol Visualg:** `#10B981` (accent border & pill)
* **🌐 Portugol Webstudio:** `#06B6D4` (accent border & pill)

---

## 4. Estrutura e Formas (Geometry)

* **Cantos Arredondados (Border Radius):**
  * Containers & Quadro de Exibição: `16px` (`rounded-lg`)
  * Botões de Ação, Abas e Chips: `50px` (`rounded-full` / Pílula)
  * Badges internos e microelementos: `8px` (`rounded-md`)
* **Layout Grid / Flex:**
  * Barra Superior (Header fixo com branding, alternador de tema e link GitHub).
  * Barra de Abas (Navegação rápida entre as 4 trilhas).
  * Painel Split (Master-Detail):
    * **Esquerda (340px):** Campo de busca em tempo real + lista de exercícios agrupados por categorias.
    * **Direita (Flex 1):** Header do exercício selecionado + Barra de ações + Moldura central ("O Quadro").

---

## 5. Componentes Principais

1. **Theme Switcher:** Botão pílula `[ ☀️ / 🌙 ]` com transição suave e persistência em `localStorage`.
2. **Visualizador de Código:** Bloco com `JetBrains Mono`, barra superior com nome do arquivo, botão `[ Copiar Código ]` e syntax highlighting estilizado via Prism.js.
3. **Quadro de Execução Interativa:**
   * Para **JavaScript:** `<iframe>` sandboxed com redimensionamento fluido.
   * Para **PHP:** Painel WebAssembly (`@php-wasm/web`) executando no navegador do cliente sem servidor.
4. **Barra de Ações Dinâmica:**
   * Botões contextuais por linguagem: `[ 👁️ Visualizar ]`, `[ 💻 Ver Código ]`, `[ ⬇️ Baixar Arquivo ]`, `[ 🔗 Nova Aba ]`, `[ 🌐 Portugol.dev ]`, `[ 🌐 Visualg.dev ]`.

---

## 6. Sistema de Identidade Visual & Logo SVG

* **Conceito & Anatomia:**
  * **Chevrons de Código `<` e `>`:** Representam sintaxe, tags e a essência da programação.
  * **Barra Diagonal `/`:** Símbolo de fechamento, execução e terminal em off-white quente (`#F4F0EA`).
  * **Monograma `H`:** O crossbar horizontal conecta os chevrons formando a letra inicial do **Hub**.
  * **Nexus Diamond `◆`:** O núcleo central do Hub simbolizando a convergência das 4 trilhas de aprendizado.
  * **Constelação das 4 Trilhas:** Micro-nós nos 4 cantos do squircle representando JavaScript (`#F7DF1E`), PHP (`#8892BF`), Portugol Visualg (`#10B981`) e Portugol Webstudio (`#06B6D4`).
* **Arquivos do Sistema:**
  * `hub/assets/logo.svg`: Master Icon squircle (512x512) para header e apresentações.
  * `hub/assets/favicon.svg`: Versão otimizada para abas de navegadores (16px / 32px / 64px).
  * `hub/assets/logo-symbol.svg`: Glifo vetorial puro e transparente para aplicações multi-canvas (Dark/Light).
* **Figma File:**
  * Canvas com prancha completa (1920x1080), variações, testes de contraste e tokens em: [Figma — Hub de Estudos](https://www.figma.com/design/RyirHcmTdHeif4NHmGeUl4/Hub-de-Estudos).
