# 🍺 Catche Beer

![Catche Beer Banner](https://catche-beer.vercel.app/og-image.png) <!-- Substitua pelo caminho de uma imagem de capa, se tiver -->

**Catche Beer** é um site de delivery de bebidas que facilita a compra online com um catálogo diversificado. Com design intuitivo e navegação fácil, oferece uma experiência prática e eficiente para os amantes de bebidas.

![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000?logo=vercel)
![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css)

## 🚀 Demonstração

Acesse o site em produção: [https://catche-beer.vercel.app/](https://catche-beer.vercel.app/)

## ✨ Sobre o Projeto

O Catche Beer foi criado para oferecer uma solução simples e eficiente para quem deseja comprar bebidas online. O site apresenta um catálogo diversificado com opções como cervejas, vinhos, destilados, refrigerantes e muito mais, tudo com um design focado na facilidade de uso.

### Funcionalidades

- **Catálogo de Produtos:** Exibição de bebidas com informações como nome, volume e preço.
- **Status da Loja:** Indicador visual mostrando se a loja está "Aberta" ou "Fechada".
- **Design Responsivo:** Interface adaptada para diferentes tamanhos de tela (desktop, tablet e mobile).
- **Navegação Intuitiva:** Estrutura simples para encontrar produtos rapidamente.

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias:

- **[Next.js 14](https://nextjs.org/):** Framework React para renderização e estruturação do site (App Router).
- **[React](https://reactjs.org/):** Biblioteca para construção da interface do usuário.
- **[Tailwind CSS](https://tailwindcss.com/):** Framework de CSS utilitário para estilização rápida e responsiva.
- **[Vercel](https://vercel.com/):** Plataforma para deploy e hospedagem.

## 📦 Estrutura de Pastas

A estrutura principal do projeto é:

catche-beer/\
├── public/ # Arquivos estáticos (imagens, ícones, etc.)\
├── src/\
│ └── app/ # Diretório principal da aplicação Next.js (App Router)\
│ ├── globals.css # Estilos globais e configurações do Tailwind\
│ ├── layout.js # Layout raiz da aplicação\
│ └── page.js # Página inicial (catálogo de bebidas)\
├── .eslintrc.json # Configuração do ESLint\
├── .gitignore # Arquivos ignorados pelo Git\
├── jsconfig.json # Configuração do caminho base para importações\
├── next.config.mjs # Configuração do Next.js\
├── package.json # Dependências e scripts do projeto\
├── postcss.config.mjs # Configuração do PostCSS para o Tailwind\
└── tailwind.config.js # Configuração do Tailwind CSS\


## 💻 Como Executar o Projeto Localmente

Para rodar este projeto em sua máquina, siga os passos abaixo.

### Pré-requisitos

Certifique-se de ter o Node.js (versão 18 ou superior) e o npm (ou yarn, pnpm) instalados.

### Passo a Passo

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/alisonnRB/catche-beer.git
    cd catche-beer
    ```

2. **Instale as dependências:**
    ``bash
    npm install
    # ou
    yarn install
    # ou
    pnpm install
   ```

3. **Execute o servidor de desenvolvimento:**
    ```bash
    npm run dev
    # ou
    yarn dev
    # ou
    pnpm dev
    # ou
    bun dev
    ```

4. Abra o navegador:\
    Acesse http://localhost:3000 para ver o resultado.

## 🧠 Aprendizados e Melhorias Futuras

Este projeto foi uma ótima oportunidade para praticar a criação de um e-commerce simples com Next.js e Tailwind CSS. Para o futuro, algumas melhorias podem ser implementadas:

    Carrinho de Compras: Adicionar funcionalidade de carrinho para gerenciar pedidos.

    Sistema de Pagamento: Integrar com gateways de pagamento (ex: Stripe, Mercado Pago).

    Filtros e Busca: Implementar filtros por categoria, preço e busca por produtos.

    Área do Cliente: Criar página de cadastro/login e histórico de pedidos.

    Banco de Dados: Conectar a um banco de dados para gerenciar produtos e pedidos de forma dinâmica.
