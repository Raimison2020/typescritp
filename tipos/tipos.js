// 14. O básico de Tipos
let nome = 'Rafaela';
console.log(nome);
// nome = 29
// 15 .Tipos Numéricos e Booleano
let idade = 28;
idade = 28.5;
console.log(idade);
let possuiHobies = false;
// possuiHobies = 1 erro
console.log(possuiHobies);
// 16. Atribuindo Tipos Explícitos
let minhaIdade;
minhaIdade = 28;
console.log(minhaIdade);
console.log(typeof minhaIdade);
// minhaIdade = 'Vinte e oito'
// console.log(minhaIdade)
// console.log(typeof minhaIdade)
// 17. Array e Tipos
let hobbies = ['Cozinhar', 'Treinar'];
console.log(hobbies[0]);
hobbies = [100];
// hobbies = 100 erro pois 100 é number e não array
// 18. tupla
let endereco = ['Av Principal', 98, ''];
console.log(endereco);
endereco = ['Rua Dom Pedro I', 1572, 'Casa'];
console.log(endereco);
// 19. enum
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 10] = "Azul";
    Cor[Cor["Laranja"] = 11] = "Laranja";
    Cor[Cor["Amarelo"] = 12] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho";
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Verde, Cor.Vermelho);
// enum mapeamento reverso
let nomeCor = Cor[0];
console.log(nomeCor);
// enum String Enums
var Colors;
(function (Colors) {
    Colors["Red"] = "RED";
    Colors["Green"] = "GREEN";
    Colors["Blue"] = "BLUE";
})(Colors || (Colors = {}));
let colors = Colors.Green;
console.log(colors);
// 20. O Tipo “Any”
let carro = 'BMW';
console.log(carro);
console.log(typeof carro);
carro = { marca: 'BMW', ano: 2013 };
console.log(carro);
console.log(typeof carro);
let obj = { nome: 'Estevan' };
// console.log(obj.idade.toFixed(2))
// unknown
let valorDesconhecido = 'Eu sou um string';
// console.log(valorDesconhecido.toUpperCase())
if (typeof valorDesconhecido === 'string') {
    console.log(valorDesconhecido.toUpperCase());
}
// 22. Usando Tipos em Funções (Parâmetros e Retorno)
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(multiplicar(4.7, 9));
// Tipos no retorno
function retornaNome() {
    return nome;
}
console.log(retornaNome());
// Funções que não retornam nada
function digaOi() {
    console.log('Oi');
}
digaOi();
// // 23. Funções Como Tipos
// let calculo
// calculo = digaOi
// calculo()
// calculo = multiplicar
// console.log(calculo(5, 6))
// Definindo tipo função
let calculo;
calculo = multiplicar;
console.log(calculo(5, 6));
// 24. Objetos e Tipos
let usuario = {
    nome: 'Rafaela',
    idade: 28
};
console.log(usuario);
usuario = {
    idade: 39,
    nome: 'Raimison'
};
console.log(usuario);
let funcionario = {
    supervisores: ['Rafaela', 'Raimison'],
    baterPonto(horario) {
        return horario <= 8 ? 'Ponto Normal' : 'Fora do Horário';
    },
};
let funcionario2 = {
    supervisores: ['Raimison', 'Lima'],
    baterPonto(horas) {
        return horas <= 8 ? 'Ponto ok' : 'Ponto incorreto';
    },
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(18));
console.log(funcionario2.supervisores);
console.log(funcionario2.baterPonto(8));
console.log(funcionario2.baterPonto(18));
// 28. Múltiplos Tipos com Union
// Variável com múltiplos tipos
let valor;
let nota = 10;
console.log(`Minha nota é: ${nota}`);
nota = '9';
console.log(`Minha nota é: ${nota}`);
// Funções com Union Types
function imprimirId(id) {
    console.log(`ID: ${id}`);
}
imprimirId(123);
imprimirId('ABC123');
// Arrays com Union Types
let lista = [1, 'dois', 3, 'quatro'];
console.log(lista);
// 29. Checando Tipos em Runtime
let valor2 = 30;
if (typeof valor2 === 'number') {
    console.log('É um number');
}
else {
    console.log(typeof valor2);
}
// 30. O Tipo “Never”
function falha(msg) {
    throw new Error(msg);
}
const produto = {
    nome: 'Sabão',
    preco: 1,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome');
        }
        if (this.preco <= 0) {
            falha('Preço inválido');
        }
    }
};
produto.validarProduto();
// 31. Valores Opcionais com Tipo Null
// Usando Union Type para atribuir dois tipos a uma propriedade
let alturaOpcional = 1.75;
alturaOpcional = null;
const contato1 = {
    nome: 'Fulano',
    tel1: '9993939',
    tel2: null
};
console.log(contato1);
// Atribuindo Null
let podeSerNull = null;
podeSerNull = 12;
console.log(podeSerNull);
podeSerNull = 'abc';
console.log(podeSerNull);
let podeSerNull2 = null;
podeSerNull2 = null;
console.log(podeSerNull2);
// podeSerNull2 = 'abc' // erro
console.log(podeSerNull2);
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    }
};
let correntista = {
    nome: 'Rafaela',
    contataBancaria: contaBancaria,
    contatos: ['993939', '323233']
};
correntista.contataBancaria.depositar(5000);
console.log(correntista);
export {};
//# sourceMappingURL=tipos.js.map