
#   Frameworks e Runtimes JavaScript

Este repositório contém um resumo prático sobre os principais frameworks e runtimes do ecossistema JavaScript moderno, tanto para frontend quanto para backend. Ideal para revisar e consultar durante o desenvolvimento.

---

##  Ecossistema

###  FRONTEND

#### ✅ Angular
- Framework completo mantido pelo Google.
- Usa TypeScript (superset do JavaScript) por padrão.
- Arquitetura baseada em módulos, componentes e serviços.
- Integração com formulários, rotas, HTTP, animações, etc.
- CLI poderosa para gerar componentes, serviços e testes.
- Muito usado em sistemas corporativos grandes.
- Instalação com Angular CLI:
  ```bash
  npm install -g @angular/cli
  ng new projeto-angular
  cd projeto-angular
  ng serve
  ```


#### ✅ Vue.js
- Framework progressivo e fácil de aprender.
- Trabalha com arquivos `.vue`, que contêm `<template>`, `<script>`, e `<style>`.
- Usa diretivas como `v-for`, `v-if`, `v-bind`, etc.
- Reatividade simples com `ref()`, `reactive()`, `watch()`.
- Componentização forte e separação de responsabilidades.
- Ferramentas comuns:
  - **Vue Router** (rotas)
  - **Pinia** ou **Vuex** (estado global)
- Instalação com Vite:
  ```bash
  npm create vite@latest projeto-vue -- --template vue
  cd projeto-vue
  npm install
  npm run dev
  ```

---

#### ✅ React.js & Next.js
- React é uma biblioteca JavaScript para construção de interfaces com componentes reutilizáveis.
- Usa JSX (JavaScript + HTML no mesmo arquivo).
- Estado com `useState`, `useEffect`, `useContext` e outros hooks.
- Virtual DOM para melhor performance.
  
##### ✅ Next.js
- Framework completo baseado em React.
- Suporte a:
  - SSR (Server Side Rendering)
  - SSG (Static Site Generation)
  - API Routes (rotas backend)
- Otimizado para SEO e performance.
- Arquitetura baseada em arquivos dentro da pasta `pages/`.
- Instalação:
  ```bash
  npx create-next-app@latest projeto-next
  cd projeto-next
  npm run dev
  ```

---

###  BACKEND

#### ✅ Node.js
- Runtime que permite rodar JavaScript fora do navegador.
- Ideal para criar APIs, automações, CLIs e servidores.
- Assíncrono por padrão (event loop e promises).
- Comandos principais:
  ```bash
  node arquivo.js
  npm init -y
  npm install pacote
  ```
- Usa módulos nativos: `fs`, `path`, `http`, entre outros.

---

#### ✅ Express.js
- Framework para Node.js focado em APIs e servidores web.
- Permite definir rotas, middlewares e respostas HTTP de forma simples.
- Muito utilizado com bancos de dados, JWT, uploads, etc.
- Instalação:
  ```bash
  npm init -y
  npm install express
  ```

---

##  Ferramentas e Convenções

| Ferramenta       | Descrição                                                                 |
|------------------|---------------------------------------------------------------------------|
| `npm`, `npx`     | Gerenciadores de pacotes JavaScript                                       |
| `yarn`           | Alternativa ao npm                                                        |
| `npm run dev`    | Inicia o modo de desenvolvimento em projetos como Vue/Next                |
| `package.json`   | Gerencia scripts, dependências e metadados do projeto                     |
| `.env`           | Arquivo de variáveis de ambiente (API keys, configs sensíveis)            |
| `git` + GitHub   | Controle de versão, colaboração e deploy                                  |

---

##  Dicas 

- Todos exigem **Node.js instalado no sistema**.
- Apesar da diferença de uso, todos usam **JavaScript ou TypeScript**.
- A estrutura de um projeto muda conforme o framework, mas os conceitos de **componentes, rotas, requisições, estado** são comuns.
- Estude um bem e você aprenderá os outros com mais facilidade.

---

>  Erica Ribeiro | Desenvolvedora em formação 
