# 🌱 EcoFood — Landing Page

🔗 **Site no ar:** https://pedroohilbert.github.io/ecofood-landing/

Landing page institucional do **EcoFood**, aplicativo que conecta restaurantes e
consumidores para combater o desperdício de alimentos: refeições excedentes com
até **70% de desconto**, com impacto real no planeta.

> Esta é a página de apresentação do produto. O aplicativo em si é um app
> **Android** desenvolvido em .NET MAUI (C#).

---

## ✨ Destaques

- Design **premium**, tema claro com profundidade visual e efeitos **3D** (cards e
  mockup do celular reagem ao mouse).
- Construída com **React + Vite + Tailwind CSS + Framer Motion**.
- Mockup fiel da tela inicial real do app.
- Foco total em **entender o produto e baixar o app** (Android).
- 100% responsiva (desktop e mobile).

---

## 🛠️ Tecnologias

| Ferramenta        | Uso                          |
| ----------------- | ---------------------------- |
| React 18          | Biblioteca de interface      |
| Vite 5            | Build e servidor de dev      |
| Tailwind CSS 3    | Estilização                  |
| Framer Motion 11  | Animações e efeitos 3D       |

---

## 🚀 Como rodar localmente

Pré-requisito: **Node.js 18+** instalado.

```bash
# 1. Instalar as dependências
npm install

# 2. Rodar em modo desenvolvimento
npm run dev
# abre em http://localhost:5173
```

---

## 🎤 Como apresentar

**Opção mais fácil:** o site já está no ar — basta abrir o link
👉 **https://pedroohilbert.github.io/ecofood-landing/**

Ou, se preferir rodar localmente na sua máquina (sem depender da internet):

**Opção 1 — Versão de produção** (recomendada para apresentar)
```bash
npm run build      # gera a pasta dist/
npm run preview    # abre em http://localhost:4173
```

**Opção 2 — Modo desenvolvimento**
```bash
npm run dev        # abre em http://localhost:5173
```

> ℹ️ **Por que não abrir o `dist/index.html` com dois cliques?**
> Os navegadores bloqueiam, por segurança, a execução de scripts de páginas
> abertas via `file://`. Por isso a apresentação usa um servidor local
> (`npm run preview`), que roda na sua máquina e **não depende da internet**.
> As fotos dos pratos no mockup do celular, essas sim, carregam da web.

---

## 📦 Build de produção

```bash
npm run build
```

Os arquivos finais ficam em `dist/`. Como o projeto usa `base: './'`, a pasta
`dist/` pode ser servida a partir de qualquer caminho (raiz ou subpasta) — basta
servi-la com `npm run preview` ou hospedá-la em qualquer servidor estático.

---

## 🚀 Publicar / atualizar o site no ar (GitHub Pages)

O site é hospedado gratuitamente no **GitHub Pages**. Para republicar depois de
qualquer alteração, basta um comando:

```bash
npm run deploy
```

Isso gera o build e envia para a branch `gh-pages` automaticamente. Em ~1 min a
versão nova já está no ar em https://pedroohilbert.github.io/ecofood-landing/

---

## 📁 Estrutura

```
ecofood-site/
├── public/            # logos e assets estáticos
├── src/
│   ├── components/    # seções da página (Hero, Problem, Solution, ...)
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

---

## 📲 Sobre o download do app

O botão **"Baixar para Android"** aponta para `public/ecofood.apk`.
Para que o download funcione, basta colocar o arquivo `ecofood.apk` dentro da
pasta `public/` antes de gerar o build.

> Disponível apenas para **Android 8.0+**. Não há versão para iOS.

---

## 👤 Autor

**Pedro Hilbert** — Projeto A3 · UNA
