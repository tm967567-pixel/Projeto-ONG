# Projeto ONG

Projeto acadêmico de desenvolvimento front-end para uma organização não governamental.

## Apresentação do projeto

O Projeto ONG consiste em uma aplicação web voltada à divulgação de projetos sociais, campanhas de doação e oportunidades de voluntariado. O projeto também possui um formulário de cadastro com validação e armazenamento local dos dados.

## Tecnologias utilizadas

- HTML5 — estrutura semântica e acessível das páginas.
- CSS3 — estilização, responsividade e sistema de design.
- JavaScript — interatividade, manipulação do DOM, validação e navegação.
- LocalStorage — persistência dos dados do formulário no navegador.
- Git — controle de versão.
- GitHub — hospedagem do repositório e gerenciamento de Issues, Milestones e Pull Requests.

## Estrutura do projeto

- `html/` — páginas da aplicação.
- `css/` — arquivo de estilos.
- `js/` — módulos JavaScript.
- `imagens/` — imagens utilizadas no projeto.
- `README.md` — documentação técnica.

## Pré-requisitos

- Navegador web atualizado.
- Visual Studio Code ou outro editor de código.
- Git instalado para trabalhar com o repositório.
- Acesso ao GitHub para utilizar o repositório remoto.

## Instalação local

1. Clone o repositório:
   `git clone https://github.com/tm967567-pixel/Projeto-ONG.git`
2. Acesse a pasta do projeto:
   `cd Projeto-ONG`
3. Abra o projeto no Visual Studio Code.
4. Execute a aplicação utilizando um servidor local.
5. Acesse a página `html/index.html` pelo servidor local.

O projeto não utiliza dependências externas ou gerenciador de pacotes.

## Execução e testes

A aplicação deve ser executada em um servidor local para garantir o funcionamento dos módulos JavaScript.

Os testes realizados incluem:

- navegação entre páginas;
- funcionamento do menu;
- navegação por teclado;
- validação do formulário;
- mensagens de erro e sucesso;
- armazenamento e recuperação dos dados com LocalStorage;
- verificação do HTML pelo W3C Validator;
- testes de acessibilidade e responsividade.

## Build e produção

O projeto não utiliza uma ferramenta de build ou empacotador. Por utilizar HTML, CSS e JavaScript nativos, os arquivos podem ser disponibilizados diretamente em um servidor web após a validação e os testes.

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
- Recursos de acessibilidade.
- Layout responsivo.

## Objetivo

Aplicar conceitos de desenvolvimento front-end, organização de código, acessibilidade, versionamento e boas práticas de desenvolvimento web.
