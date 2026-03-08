# 🧪 Testes Automatizados - Webdojo (Cypress)

Este projeto contém os **testes automatizados End-to-End (E2E)** da
aplicação **Webdojo**, utilizando o framework **Cypress**.

Os testes simulam o comportamento real do usuário no navegador,
garantindo que as funcionalidades críticas da aplicação estejam
funcionando corretamente.

------------------------------------------------------------------------

# 📌 Tecnologias utilizadas

-   Node.js
-   Cypress
-   JavaScript
-   NPM

------------------------------------------------------------------------

# 📋 Pré-requisitos

Antes de executar o projeto, é necessário possuir instalado em sua
máquina:

-   Node.js (versão 18 ou superior)
-   npm

Para verificar:

``` bash
node -v
npm -v
```

------------------------------------------------------------------------

# 📦 Instalação do projeto

Clone o repositório e instale as dependências:

``` bash
npm install
```

------------------------------------------------------------------------

# 🚀 Executando a aplicação Webdojo

A aplicação **Webdojo** está no mesmo repositório.

Para iniciar a aplicação execute:

``` bash
npm run dev
```

A aplicação ficará disponível em:

    http://localhost:3000

⚠️ **Importante:**\
A aplicação deve estar rodando antes da execução dos testes.

------------------------------------------------------------------------

# 🧪 Executando os testes

## Executar todos os testes (modo headless)

``` bash
npm run test
```

Configuração utilizada:

-   viewport: **1440 x 900**
-   execução em modo CLI (headless)

------------------------------------------------------------------------

## Executar testes com interface gráfica

``` bash
npm run test:ui
```

Esse modo abre o **Cypress Test Runner**, permitindo:

-   executar testes manualmente
-   debugar cenários
-   visualizar logs
-   inspecionar elementos

------------------------------------------------------------------------

## Executar testes de login

``` bash
npm run test:login
```

Executa especificamente os testes relacionados ao fluxo de **login**.

------------------------------------------------------------------------

## Executar testes de login em modo mobile

``` bash
npm run test:login:mobile
```

Configuração simulada:

  Configuração     Valor
  ---------------- -------
  viewportWidth    414
  viewportHeight   896

Simula dispositivos mobile semelhantes ao **iPhone XR / iPhone 11**.

------------------------------------------------------------------------

# 📂 Estrutura do Projeto

    web
     ├── cypress
     │   ├── e2e
     │   │
     │   ├── fixtures
     │   │   ├── cep.json
     │   │   ├── consultancy.json
     │   │   └── document.pdf
     │   │
     │   └── support
     │       ├── actions
     │       ├── commands.js
     │       ├── e2e.js
     │       └── utils.js

------------------------------------------------------------------------

# 📁 Descrição das pastas

## cypress/e2e

Contém os **arquivos de testes automatizados**.

Exemplo:

    login.cy.js

Cada arquivo representa um **conjunto de cenários de teste**.

------------------------------------------------------------------------

## cypress/fixtures

Armazena **dados mockados utilizados nos testes**.

  Arquivo            Descrição
  ------------------ -----------------------------------------
  cep.json           dados de endereço
  consultancy.json   dados de consultoria
  document.pdf       arquivo utilizado para testes de upload

Uso em testes:

``` javascript
cy.fixture('cep.json')
```

------------------------------------------------------------------------

## cypress/support

Contém configurações e funcionalidades reutilizáveis.

### actions

Centraliza **ações reutilizáveis da aplicação**, como:

-   login
-   preenchimento de formulários
-   navegação entre páginas

------------------------------------------------------------------------

### commands.js

Arquivo utilizado para criação de **comandos customizados do Cypress**.

Exemplo:

``` javascript
Cypress.Commands.add('login', (email, senha) => {
  cy.get('#email').type(email)
  cy.get('#password').type(senha)
  cy.get('#login').click()
})
```

Uso no teste:

``` javascript
cy.login('usuario@email.com', '123456')
```

------------------------------------------------------------------------

### e2e.js

Arquivo executado automaticamente antes dos testes.

Utilizado para:

-   carregar comandos globais
-   configurações gerais
-   hooks globais

------------------------------------------------------------------------

### utils.js

Arquivo com **funções utilitárias reutilizáveis**, como:

-   geração de dados
-   manipulação de datas
-   validações auxiliares

------------------------------------------------------------------------

# 📱 Configuração de dispositivos

  Tipo      Resolução
  --------- ------------
  Desktop   1440 x 900
  Mobile    414 x 896

------------------------------------------------------------------------

# 🧩 Boas práticas utilizadas

-   Organização modular dos testes
-   Uso de **fixtures para dados de teste**
-   Criação de **comandos customizados**
-   Reutilização de ações comuns
-   Separação entre **dados, ações e testes**

------------------------------------------------------------------------

# 🐞 Debug de testes

Para debugar os testes utilize:

``` bash
npm run test:ui
```

Esse modo permite:

-   executar testes passo a passo
-   visualizar logs detalhados
-   inspecionar elementos no DOM
-   analisar falhas rapidamente

------------------------------------------------------------------------

# 📚 Documentação

Documentação oficial do Cypress:

https://docs.cypress.io

------------------------------------------------------------------------

# 👥 Contribuição

1.  Crie uma branch a partir da `main`
2.  Implemente sua melhoria
3.  Abra um Pull Request

------------------------------------------------------------------------

# 📄 Licença

Este projeto é utilizado para fins de **testes automatizados da
aplicação Webdojo**.
