# Projeto Simples com Next.js

Este é um projeto básico criado com o framework **Next.js**, que é baseado em React e oferece funcionalidades poderosas como renderização do lado do servidor (SSR), geração de páginas estáticas (SSG), roteamento automático e muito mais.

## 🚀 Tecnologias usadas

- Next.js
- React
- Tailwind CSS (para estilização)

## 📁 Estrutura do Projeto

meu-site-next/
├── pages/
│   ├── index.js         # Página inicial
│   └── sobre.js         # Página "Sobre"
├── styles/
│   └── globals.css      # Estilos globais com Tailwind
├── tailwind.config.js   # Configuração do Tailwind
├── package.json         # Dependências do projeto
└── README.md            # Este arquivo

## ▶️ Como rodar localmente

1. Clone o repositório ou crie o projeto:

```bash
npx create-next-app@latest meu-site-next
cd meu-site-next
```

2. Instale o Tailwind CSS:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

3. Configure o Tailwind:

No `tailwind.config.js`:

```js
content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"]
```

No `styles/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

4. Rode o projeto:

```bash
npm run dev
```

Abra no navegador: http://localhost:3000

## 🌐 Roteamento automático

- `/` → Página inicial (`index.js`)
- `/sobre` → Página de informações (`sobre.js`)

## 🧠 Por que usar Next.js?

| Recurso            | Benefício                                              |
|--------------------|--------------------------------------------------------|
| SSR/SSG            | Melhora o SEO e a performance                          |
| Roteamento automático | Menos configuração para criar novas páginas       |
| API interna        | Permite criar rotas backend sem outro servidor         |
| Otimização de imagens | Carregamento mais rápido e automático               |
| Integração com Vercel | Deploy super simples e gratuito                     |

## 📦 Deploy com Vercel (opcional)

Você pode implantar facilmente este projeto na plataforma gratuita da Vercel:

1. Acesse https://vercel.com
2. Clique em "Import Project" e conecte seu GitHub
3. Escolha o repositório com esse projeto
4. Vercel detecta Next.js automaticamente e faz o deploy

## ✨ Resultado

Este projeto é ideal para iniciantes que desejam entender a estrutura e os benefícios do Next.js.