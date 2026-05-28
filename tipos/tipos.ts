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