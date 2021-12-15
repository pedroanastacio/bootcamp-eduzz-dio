# Introdução ao TypeScript: Explorando Classes, Tipos e Interfaces
### Interface
Utilizada para definição de contratos de estruturas de dados e classes.

### Type
Utilizado para definir estruturas de dados e fazer junções e merges de interfaces que serão utilizadas no código.
#### Exemplo:
````typescript
	interface  IAnimal {
		nome: string;
		tipo: 'Terrestre' | 'Aquático';
		domestico: boolean;
		ruido(som: string): void;
	}

	interface IFelino extends IAnimal {
		visaoNoturna: boolean;
	}
	  
	interface ICanino extends IAnimal {
		porte: 'Pequeno' | 'Médio' | 'Grande';
	}

	type IDomestico = IFelino | ICanino;

	const animal: IAnimal = {
		nome: 'Golfinho',
		tipo: 'Aquático',
		domestico: false,
		ruido: (som) => `${som}`
	}

	const felino: IFelino = {
		nome: 'Tigre',
		tipo: 'Terrestre',
		visaoNoturna: true,
		domestico: false,
		ruido: (som) => `${som}`
	}

	const animal2: IDomestico = {
		nome: 'Gato',
		tipo: 'Terrestre',
		domestico: true,
		ruido: (som) => `${som}`,
		visaoNoturna: true
	}
````

### Generic Types
O tipo genérico é utilizado quando não se sabe o tipo de dado com que se está trabalhando ou se está consumindo uma API cujos dados retornados possam variar de tipo, por  exemplo.
Por padrão, o tipo genérico é representado pela letra "T".

#### Exemplo: 
````typescript
const changeListItems = <T>(array: T[], value: T) => {
	return array.map(() => value);
}

changeListItems(['a', 'b', 'c'], 'd');