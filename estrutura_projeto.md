# Estrutura de projeto

## App.js
 - Rotas
 - Providers
 - Fluxo de autenticação e validação
 - Itens globais

## containers
 - Páginas (**Ex:** User, Store e Shop).
 
## components
 - Dumb components
 - Smart components
 - **Dica**: criar um arquivo `index.js` com a importação de todos os componentes e exportá-los. Isso permite a importação de todos os componentes a partir de um único arquivo.

## resources
  - Chamadas de serviços

## assets
 - Imagens
 - Estilos globais
 - Fontes
 
 ## commons
 ### utils
  - Arquivos utilitários e funções reaproveitáveis (**Ex:** funções de limpeza e tratamento de strings e funções de validação).
  
 ### constants
  - Valores que não irão mudar e possam ser reaproveitados em diversos lugares da aplicação (**Ex**: valores de um menu).
 
 
## routes
  - Rotas do sistema
  - **Dica**: criar arquivos de rota separados para cada container e importar todos eles em um único arquivo `index.js`.