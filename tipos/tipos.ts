// 14. O básico de Tipos
let nome: string = 'Rafaela'
console.log(nome)
// nome = 29

// 15 .Tipos Numéricos e Booleano
let idade: number = 28
idade = 28.5
console.log(idade)

let possuiHobies: boolean = false
// possuiHobies = 1 erro
console.log(possuiHobies)

// 16. Atribuindo Tipos Explícitos
let minhaIdade: number
minhaIdade = 28
console.log(minhaIdade)
console.log(typeof minhaIdade)

// minhaIdade = 'Vinte e oito'
// console.log(minhaIdade)
// console.log(typeof minhaIdade)

// 17. Array e Tipos
let hobbies: any[] = ['Cozinhar', 'Treinar']
console.log(hobbies[0])

hobbies = [100]
// hobbies = 100 erro pois 100 é number e não array

// 18. tupla
let endereco: [string, number, string] = ['Av Principal', 98, '']
console.log(endereco)

endereco = ['Rua Dom Pedro I', 1572, 'Casa']
console.log(endereco)

// 19. enum
enum Cor {
	Cinza,
	Verde = 100,
	Azul = 10,
	Laranja,
	Amarelo,
	Vermelho = 100
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)

console.log(Cor.Azul)
console.log(Cor.Laranja, Cor.Amarelo)
console.log(Cor.Verde, Cor.Vermelho)

// enum mapeamento reverso
let nomeCor = Cor[0]
console.log(nomeCor)

// enum String Enums
enum Colors {
	Red = 'RED',
	Green = 'GREEN',
	Blue = 'BLUE'
}

let colors = Colors.Green
console.log(colors)

// 20. O Tipo “Any”
let carro: any = 'BMW'
console.log(carro)
console.log(typeof carro)

carro = { marca: 'BMW', ano: 2013 }
console.log(carro)
console.log(typeof carro)

let obj: any = { nome: 'Estevan' }
// console.log(obj.idade.toFixed(2))

// unknown
let valorDesconhecido: unknown = 'Eu sou um string'
// console.log(valorDesconhecido.toUpperCase())

if (typeof valorDesconhecido === 'string') {
	console.log(valorDesconhecido.toUpperCase())
}

// 22. Usando Tipos em Funções (Parâmetros e Retorno)
function multiplicar(numA: number, numB: number): number {
	return numA * numB
}

console.log(multiplicar(4.7, 9))

// Tipos no retorno
function retornaNome(): string {
	return nome
}

console.log(retornaNome())

// Funções que não retornam nada
function digaOi(): void {
	console.log('Oi')
}
digaOi()

// // 23. Funções Como Tipos
// let calculo
// calculo = digaOi
// calculo()

// calculo = multiplicar
// console.log(calculo(5, 6))

// Definindo tipo função
let calculo: (x: number, y: number) => number

calculo = multiplicar
console.log(calculo(5, 6))