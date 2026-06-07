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

// 24. Objetos e Tipos
let usuario: { nome: string, idade: number } = {
	nome: 'Rafaela',
	idade: 28
}
console.log(usuario)

usuario = {
	idade: 39,
	nome: 'Raimison'
}
console.log(usuario)

// 25 e 26 Desafio Tipos Objetos/Resposta // 27. Definindo Tipos Personalizados (Alias)
/*## *Criar um objeto funcionário com:*

- Array de strings com os nomes dos supervisores
				- Função de bater ponto que recebe a hora (número) e retorna uma string
						-> Ponto normal (<= 8)
						-> Fora do horário (> 8)
*/
type Funcionario = {
	supervisores: string[],
	baterPonto: (horas: number) => string
}

let funcionario: Funcionario = {
	supervisores: ['Rafaela', 'Raimison'],
	baterPonto(horario: number): string {
		return horario <= 8 ? 'Ponto Normal' : 'Fora do Horário'
	},
}

let funcionario2: Funcionario = {
	supervisores: ['Raimison', 'Lima'],
	baterPonto(horas: number): string {
		return horas <= 8 ? 'Ponto ok' : 'Ponto incorreto'
	},
}

console.log(funcionario.supervisores)
console.log(funcionario.baterPonto(8))
console.log(funcionario.baterPonto(18))

console.log(funcionario2.supervisores)
console.log(funcionario2.baterPonto(8))
console.log(funcionario2.baterPonto(18))

// 28. Múltiplos Tipos com Union
// Variável com múltiplos tipos
let valor: string | number

let nota: number | string = 10
console.log(`Minha nota é: ${nota}`)
nota = '9'
console.log(`Minha nota é: ${nota}`)

// Funções com Union Types
function imprimirId(id: number | string) {
	console.log(`ID: ${id}`)
}

imprimirId(123)
imprimirId('ABC123')

// Arrays com Union Types
let lista: (string | number)[] = [1, 'dois', 3, 'quatro']
console.log(lista)

// 29. Checando Tipos em Runtime
let valor2 = 30
if (typeof valor2 === 'number') {
	console.log('É um number')
} else {
	console.log(typeof valor2)
}

// 30. O Tipo “Never”
function falha(msg: string): never {
	throw new Error(msg)
}

const produto = {
	nome: 'Sabão',
	preco: 1,
	validarProduto() {
		if (!this.nome || this.nome.trim().length == 0) {
			falha('Precisa ter um nome')
		}
		if (this.preco <= 0) {
			falha('Preço inválido')
		}
	}
}

produto.validarProduto()

// 31. Valores Opcionais com Tipo Null
// Usando Union Type para atribuir dois tipos a uma propriedade
let alturaOpcional: null | number = 1.75
alturaOpcional = null

type Contado = {
	nome: string,
	tel1: string,
	tel2: string | null
}

const contato1: Contado = {
	nome: 'Fulano',
	tel1: '9993939',
	tel2: null
}

console.log(contato1)

// Atribuindo Null
let podeSerNull = null
podeSerNull = 12
console.log(podeSerNull)

podeSerNull = 'abc'
console.log(podeSerNull)

let podeSerNull2: null = null
podeSerNull2 = null
console.log(podeSerNull2)

// podeSerNull2 = 'abc' // erro
console.log(podeSerNull2)

// 32/33. Desafio: Transformar Código JS em TS
/** Código JS
 * let contaBancaria = {
	saldo: 3456,
	depositar(valor) {
		this.saldo += valor
	}
}

let correntista = {
	nome: 'Ana Silva',
	contaBancaria: contaBancaria,
	contatos: ['34567890', '98765432']
}

correntista.contaBancaria.depositar(3000)
console.log(correntista)
 */

type ContaBancaria = {
	saldo: number,
	depositar: (valor: number) => void
}

type Correntista = {
	nome: string,
	contataBancaria: ContaBancaria
	contatos: string[]
}

let contaBancaria: ContaBancaria = {
	saldo: 3456,
	depositar(valor: number) {
		this.saldo += valor
	}
}

let correntista: Correntista = {
	nome: 'Rafaela',
	contataBancaria: contaBancaria,
	contatos: ['993939', '323233']
}

correntista.contataBancaria.depositar(5000)
console.log(correntista)