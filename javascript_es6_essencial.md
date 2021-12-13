# Javascript ES6 Essencial
### Função de primeira classe e ordem maior:
As funções podem ser atribuídas a uma variável ou estrutura de dados (Ex: object e array), podendo serem passadas como argumento e retornadas por outras funções.

### Currying: 
Técnica que permite transformar funções de n parâmetros em apenas uma função que rece apenas 1 parâmetro, conseiderando que para cada parâmetro é retornada uma nova função.

### Hoisting: 
 - Hoisting significa levantar ou suspender;
 - Hoist de variável: só eleva a criação da variável, não a sua atribuição;
 - Hoist de função: eleva a função ao topo como um todo.
 
 ### Imutabilidade:
  - Dados são imutáveis;
  - Caso for preciso alterar uma variável, uma cópia da mesma é criada para fazer a alteração.
  
### Escopo:
Exemplo:

	// escopo global (raiz)
	
    {
      // escopo de bloco
    }	
    
    function test() {
      // escopo de função
    }
    
### Tipos de variáveis:
 - var: 
	 - não respeita escopo de bloco;
 - let:
	 - respeita escopo de bloco;
     - pode ser alterada;
 - const:
	 - respeita escopo de bloco;	
     - não pode ser alterada caso seja um tipo primitivo;
     - é possível alterar o conteúdo mas não para onde aponta. Exemplos: 
        - pode alterar a propriedade de um objeto, mas não para onde o ponteiro aponta, ou seja não é possível reatribuir o objeto;
        - em um Array é possível adicionar, remover e alterar itens, mas não pode ser reatribuído;
        
### Tipos e Variáveis
:link: Links úteis:
 -  [Objetos](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
 - [Arrays](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)
 - [Operadores](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators)
  - [Condicionais](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)
  - [Estruturas de repetição](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
  - Orientação a objetos:
	   - [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
	   - [Classes ES6](https://coryrylan.com/blog/javascript-es6-class-syntax)
	   - [Encapsulamento](https://www.youtube.com/watch?v=Z11iEPRGOiw&ab_channel=Cod3rCursos)