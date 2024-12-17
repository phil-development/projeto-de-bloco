# Catálogo de Filmes - Instituto Infnet

## Descrição

Este projeto foi desenvolvido como um trabalho prático para o Instituto Infnet, com o objetivo de criar um sistema de catálogo de filmes simples utilizando as tecnologias ReactJS, Vite e TypeScript. O sistema permite aos usuários navegar por uma lista de filmes, visualizar detalhes sobre cada filme e realizar login na plataforma.

## Tecnologias Utilizadas

*   **ReactJS:** Biblioteca JavaScript para construção de interfaces de usuário.
*   **Vite:** Ferramenta de build para desenvolvimento web frontend.
*   **TypeScript:** Linguagem de programação que adiciona tipagem estática ao JavaScript.
*   **Supabase:** Plataforma open-source que oferece backend como serviço (BaaS), incluindo banco de dados, autenticação e armazenamento.
*   **TMDB API:** API (Application Programming Interface) do The Movie Database para acessar informações sobre filmes.
*   **Vercel:** Plataforma de hospedagem para aplicações web.

## Funcionalidades

*   Listagem de filmes.
*   Visualização de detalhes de filmes (título, sinopse, data de lançamento, etc.).
*   Sistema de login com Supabase.
*   Busca de filmes por título.

## Como Rodar a Aplicação

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/phil-development/projeto-de-bloco.git
    ```

2.  **Acesse o diretório do projeto:**

    ```bash
    cd projeto-de-bloco
    ```

3.  **Instale as dependências:**

    ```bash
    npm install
    ```

4.  **Crie um arquivo `.env.local` na raiz do projeto:**

    ```bash
    touch .env.local
    ```

5.  **Adicione as seguintes variáveis de ambiente no arquivo `.env.local`:**

    ```
    APP_TMDB_API_KEY=sua_chave_api_tmdb
    APP_SUPABASE_URL=sua_url_supabase
    APP_SUPABASE_ANON_KEY=sua_chave_anonima_supabase
    ```

    **Observação:** Substitua os valores `sua_chave_api_tmdb`, `sua_url_supabase` e `sua_chave_anonima_supabase` pelas suas credenciais reais da TMDB API e Supabase.

6.  **Inicie a aplicação:**

    ```bash
    npm run dev
    ```

## Objetivo do Projeto

O principal objetivo deste projeto foi demonstrar conhecimentos em:

*   **Estruturação de projetos ReactJS utilizando Vite e TypeScript.**
*   **Consumo de APIs externas (TMDB API).**
*   **Implementação de sistema de autenticação com Supabase.**
*   **Boas práticas de programação, como organização de código, componentização e uso de TypeScript.**
*   **Deploy da aplicação utilizando Vercel.**

## Contato

Em caso de dúvidas ou sugestões, entre em contato com o desenvolvedor:

*   **Seu Nome:** Filipe Vasconcelos Vilarino
*   **E-mail:** contato@filipevilarino.com.br

## Licença

Este projeto está licenciado sob a licença MIT - consulte o arquivo \[LICENSE](https://www.google.com/url?sa=E&source=gmail&q=LICENSE) para obter detalhes.
