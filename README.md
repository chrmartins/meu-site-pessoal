# Meus Repositórios

Este projeto é uma aplicação React que lista os repositórios do GitHub de um usuário específico. Ele utiliza React, TypeScript, React Query e a API do GitHub para buscar e exibir os repositórios de um usuário, permitindo paginação e visualização dos detalhes de cada repositório.

## Funcionalidades

- **Busca de Repositórios**: Permite ao usuário digitar seu nome de usuário do GitHub e buscar seus repositórios.
- **Listagem de Repositórios**: Exibe os repositórios do usuário em uma interface limpa e moderna.
- **Paginação**: Carrega mais repositórios conforme o usuário navega.
- **Detalhes dos Repositórios**: Exibe informações detalhadas sobre cada repositório.
- **Botão de Voltar**: Permite ao usuário voltar à tela de input para buscar outro usuário.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript**: Superconjunto de JavaScript que adiciona tipagem estática ao JavaScript.
- **React Query**: Biblioteca para gerenciamento de estado de servidor e cache.
- **GitHub API**: Interface de programação de aplicações para interagir com os dados do GitHub.
- **Axios**: Biblioteca para fazer requisições HTTP.
- **React Router**: Biblioteca para roteamento em aplicações React.
- **React Toastify**: Biblioteca para exibir notificações.

## Estrutura do Projeto

```plaintext
meus-repositorios/
├── public/
├── src/
│   ├── api/
│   │   └── github.ts
│   ├── components/
│   │   ├── ErrorToast/
│   │   │   ├── ErrorToast.tsx
│   │   │   └── ErrorToast.css
│   │   ├── Header/
│   │   │   ├── Header.tsx
│   │   │   └── Header.css
│   │   ├── ListCards/
│   │   │   ├── ListCards.tsx
│   │   │   └── ListCards.css
│   │   ├── LoadMoreButton/
│   │   │   ├── LoadMoreButton.tsx
│   │   │   └── LoadMoreButton.css
│   │   ├── RepoCard/
│   │   │   ├── RepoCard.tsx
│   │   │   └── RepoCard.css
│   │   ├── Spinner/
│   │   │   ├── Spinner.tsx
│   │   │   └── Spinner.css
│   │   ├── UserInfo/
│   │   │   ├── UserInfo.tsx
│   │   │   └── UserInfo.css
│   ├── pages/
│   │   ├── Home/
│   │   │   ├── Home.tsx
│   │   │   └── Home.css
│   │   ├── HomeInput/
│   │   │   ├── HomeInput.tsx
│   │   │   └── HomeInput.css
│   ├── services/
│   │   └── useFetchData.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── routes.tsx
├── .gitignore
├── package.json
├── README.md
├── tsconfig.json
└── yarn.lock
