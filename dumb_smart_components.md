# Dumb e Smart Components

## Dumb Components
 - Preocupa-se com a apresentação;
 - Recebem valores via props;
 - Não possuem dependências com o restante da aplicação;
 - Não especificam como os dados são carregados ou sofrem mutação;
 - Recebem valores e callbacks exclusivamente via props;
 - Raramente possuem estado, quando precisam de estado é para controlar a interface e não dados do usuário;
 - São escritos na maioria das vezes como componentes funcionais.
 
 **Exemplos:**
  - Button
  - Card
  - Sidebar
  - Footer
  - List
  - Menu

## Smart Components
 - Preocupam-se com como as coisas vão funcionar;
 - Poder conter outros Smart e Dumb components;
 - Providenciam dados e padrões de apresentação ou outros containers;
 - Na maioria dos casos possuem estado e podem chamar outros fluxos do sistema.

**Exemplos:**
 - UserGallery
 - UserPage
 - FilterBook
 - FollowersSidebar
 - ListCards

