# React - Ciclo de Vida

![Ciclo de vida de um componente React](https://hackernoon.com/hn-images/1*sn-ftowp0_VVRbeUAFECMA.png)

Conforme mostra a imagem acima, um componente React passa pelas seguintes fases:
 1.  Inicialização;
 2.  Montagem;
 3.  Atualização;
 4.  Desmontagem;
 
 ### 1 - Inicialização
Fase onde o componente React se prepara par montagem, configurando os estados inicias e props padrão, caso haja.


### 2 - Montagem
Após a preparação com as necessidades básicas, estado e props, o componente React está pronto para ser montado no DOM do navegador.

 Esta fase fornece os seguintes métodos hooks para antes e depois da montagem dos componentes:
 - **componentWillMount**: 
	 - É executado pouco antes do componente estar prestes a ser montado no DOM. Portanto, após este método, o componente será montado.  
	 - Todas as coisas que você deseja fazer antes da montagem de um componente devem ser definidas aqui.
	 - Este método é executado uma vez no ciclo de vida de um componente e antes da primeira renderização.
	 - **Uso:** componentWillMount é usado para inicializar os estados ou props.
	 
 - **render**: monta o componente no navegador. Este é um método puro, o que significa que fornece a mesma saída sempre que a mesma entrada é fornecida.
 
 - **componentDidMount**:
	 -  Este é método hook é executado após a montagem do componente no DOM.  
    -  Este método é executado uma vez no ciclo de vida de um componente e após a primeira renderização.  
    - Como, neste método, podemos acessar o DOM, devemos inicializar as bibliotecas JS como o Jquery que precisam acessar o DOM.  
     - **Uso:** Este é o método certo para integrar com bibliotecas Javascript de terceiros e também para fazer chamadas de API.
 
 
### 3 - Atualização
Esta fase começa quando o componente react nasce no navegador e recebe novas atualizações. O componente pode ser atualizado de duas maneiras, enviando novas props ou atualizando o estado.  

Quando o estado é atualizado através do setState, temos os seguintes métodos hooks:

 - **shouldComponentUpdate**: 
	 - Basicamente faz uma pergunta ao React quando o componente recebe novos props ou o estado está sendo atualizado: o componente deve ou não ser renderizado novamente?
	 - Esse método deve retornar verdadeiro ou falso e, de acordo com isso, o componente será renderizado novamente ou ignorado. Por padrão, este método retorna verdadeiro.
	 - **Uso:** Este método é geralmente usado quando a renderização é um método muito pesado, então você pode evitar renderizar diversas vezes.
 - **componentWillUpdate**: 
	 - É executado somente depois que `shouldComponentUpdate` retorna true.
	 -  Este método é usado apenas para fazer a preparação para a próxima renderização, semelhante a `componentWillMount` ou constructor.  
	- **Uso:** Pode haver algum caso de uso em que seja necessário algum cálculo ou preparação antes de renderizar algum item; este é o lugar para fazê-lo.
	
- **componentDidUpdate**:
	-  É executado quando o novo componente é atualizado no DOM.
	-  **Uso:** Este método é usado para acionar novamente as bibliotecas de terceiros usadas, a fim de garantir que essas bibliotecas também sejam atualizadas e recarregadas.

Todos os métodos mostrados anteriormente se comportam da mesma forma, tanto para novos estados ou props, mas há um exclusivo para novas props recebidas do pai, que é o `componentWillReceiveProps`.

 - **componentWillReceiveProps**:
	 - É executado quando as props foram alteradas e não é a primeira renderização.
	 -  Às vezes, o estado depende das props, portanto, sempre que as props mudam, o estado também deve ser sincronizado. Este é o método onde isso deve ser feito.  
	 -  O método semelhante para o estado não existe antes da mudança de estado porque as props são lidas apenas dentro de um componente e nunca podem ser dependentes do estado.  
	 - **_Uso:_** é assim que o estado pode ser mantido sincronizado com as novas props.
	
	
### 4 - Desmontagem
Nesta fase, o componente não é necessário e então será desmontado do DOM. O seguinte método é chamado nesta fase:
 - **componentWillUnmount**:
	  - Este método é o último método no ciclo de vida. Isso é executado pouco antes de o componente ser removido do DOM. 
	 - **Uso:** Neste método, fazemos todas as limpezas relacionadas ao componente. Por exemplo, no logout, os detalhes do usuário e todos os tokens de autenticação podem ser apagados antes de desmontar o componente principal.
	 
**_Fonte_**: [HACKERNOON](https://hackernoon.com/reactjs-component-lifecycle-methods-a-deep-dive-38275d9d13c0)
**_Autor_**: [Haldar Mahesh](https://hackernoon.com/u/haldar.mahesh)
