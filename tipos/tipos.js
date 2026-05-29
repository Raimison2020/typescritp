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
export {};
//# sourceMappingURL=tipos.js.map