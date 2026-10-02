# Projeto ONG

Projeto acadêmico de desenvolvimento front-end para uma organização não governamental.

## Apresentação do projeto

O Projeto ONG consiste em uma aplicação web voltada à divulgação de projetos sociais, campanhas de doação e oportunidades de voluntariado. O projeto também possui um formulário de cadastro com validação e armazenamento local dos dados.

## Tecnologias utilizadas

- HTML5 — estrutura semântica e acessível das páginas.
- CSS3 — estilização, responsividade e sistema de design.
- JavaScript — interatividade, manipulação do DOM, validação e navegação.
- LocalStorage — persistência dos dados do formulário no navegador.
- Vite — ferramenta de build, agrupamento e minificação dos arquivos para produção.
- Sharp — otimização e conversão da imagem para WebP.
- Git — controle de versão.
- GitHub — hospedagem do repositório e gerenciamento de Issues, Milestones e Pull Requests.

## Estrutura do projeto

- `html/` — páginas da aplicação.
- `css/` — arquivo de estilos.
- `js/` — módulos JavaScript.
- `imagens/` — arquivos de imagem utilizados durante o desenvolvimento.
- `public/` — recursos estáticos utilizados na versão de produção.
- `dist/` — arquivos gerados pelo build de produção.
- `vite.config.mjs` — configuração do Vite.
- `otimizar-imagem.mjs` — script utilizado para otimização da imagem.
- `package.json` — configuração do projeto e scripts npm.
- `README.md` — documentação técnica.

## Pré-requisitos

- Navegador web atualizado.
- Visual Studio Code ou outro editor de código.
- Node.js e npm instalados.
- Git instalado para trabalhar com o repositório.
- Acesso ao GitHub para utilizar o repositório remoto.

## Instalação local

1. Clone o repositório:

   `git clone https://github.com/tm967567-pixel/Projeto-ONG.git`

2. Acesse a pasta do projeto:

   `cd Projeto-ONG`

3. Instale as dependências:

   `npm install`

4. Inicie o servidor de desenvolvimento:

   `npm run dev`

5. Acesse o endereço informado pelo Vite no navegador.

## Execução e testes

Os principais testes realizados incluem:

- navegação entre páginas;
- funcionamento do menu;
- navegação por teclado;
- validação do formulário;
- mensagens de erro e sucesso;
- armazenamento e recuperação dos dados com LocalStorage;
- funcionamento do modo escuro;
- verificação do HTML pelo W3C Validator;
- testes de acessibilidade e responsividade;
- teste da versão de produção com `npm run preview`.

## Build e produção

O projeto utiliza o Vite para gerar a versão otimizada para produção.

Para gerar o build:

`npm run build`

Para testar a versão de produção localmente:

`npm run preview`

O processo de build realiza o agrupamento e a minificação dos arquivos utilizados pela aplicação.

A imagem principal também foi convertida de PNG para WebP para reduzir o tamanho do recurso utilizado na aplicação.

## Versionamento

O projeto utiliza Git e GitHub com uma estrutura baseada no GitFlow.

- `main` — versão de produção.
- `develop` — desenvolvimento contínuo.
- `feature/*` — desenvolvimento de funcionalidades específicas.
- `release/*` — preparação de versões.
- Tags — identificação das versões estáveis.

As mensagens de commit seguem o padrão Conventional Commits, utilizando tipos como `feat`, `fix`, `docs` e `chore`.

A primeira versão estável foi identificada pela tag `v1.0.0`.

## Funcionalidades

- Navegação entre páginas.
- Exibição dinâmica de projetos.
- Campanhas de doação e voluntariado.
- Formulário de cadastro.
- Validação dos campos.
- Persistência dos dados com LocalStorage.
- Modo claro e modo escuro.
- Recursos de acessibilidade.
- Navegação por teclado.
- Layout responsivo.
- Otimização de recursos para produção.

## Objetivo

Aplicar conceitos de desenvolvimento front-end, organização de código, acessibilidade, versionamento, otimização e boas práticas de desenvolvimento web.