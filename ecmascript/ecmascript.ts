// // let & const
// console.log(seraQuePode);
// let seraQuePode = "?";

let estaFrio = false;
let acao;

// if (estaFrio) {
//   acao = "Colacar casaco!";
//   console.log(acao);
// }

estaFrio ? (acao = "Colcar casaco!") : (acao = "Não colocar caso");
console.log(acao);

// cost
// const cpf: string = "123.456.789-00";
// cpf = "789.443.004.-11";
// console.log(cpf);

// 47. Let e Const #2

var segredo = "externo";
function revelar() {
  const segredo = "interno";
  console.log(segredo);
}
revelar();
console.log(segredo);

// Escopo de bloco
// {
//   const def = "def";
// }

// console.log(def);

// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }
// console.log(i);

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// console.log(i);

// 48. Arrow Function #01
// Evolução da função tradicional para arrow fuction
const somar = function (n1: number, n2: number): number {
  return n1 + n2;
};
console.log(somar(2, 2));

const subtrair = (n1: number, n2: number): number => {
  return n1 - n2;
};
console.log(subtrair(2, 3));

// 49. Arrow Function #02
// Função sem parâmetro
const saudacao = () => console.log("Olá");
saudacao();

// Com um úncio parâmetro
const falarCom = (pessoa: string) => console.log("Olá " + pessoa);
falarCom("Rafaela");

// this
// function normalComThis() {
//   console.log(this);
// }
// normalComThis();

// const normalComThisEscpecial = normalComThis.bind({ nome: "Rafa Daina" });
// normalComThisEscpecial();

// const arrowComThis = () => console.log(this);
// arrowComThis();

// let nome = "Guerreiro"; // variável global solta

// class Personagem {
//   nome: string = "Arqueiro";
//   vida: number = 100;

//   atacar() {
//     console.log(nome + " atacou!"); // Vai usar a variável global
//   }
// }

// const p = new Personagem();
// p.atacar(); // Saída: 'Guerreiro atacou!' (Mas o personagem era o Arqueiro!)

// Usando o this a forma correta do código acima:

// class Personagem {
//   nome: string = "Arqueiro";
//   vida: number = 100;

//   atacar() {
//     // CORRETO: 'this.nome' pega o nome DESTE personagem específico
//     console.log(this.nome + " disparou uma flexa!");

//     this.vida -= 10; // CORRETO: Altera a vida DESTE personagem específico
//   }
// }

// const heroi1 = new Personagem();
// heroi1.nome = "Mago";

// const heroi2 = new Personagem();
// heroi2.nome = "Ladino";

// heroi1.atacar();
// heroi2.atacar();

// This em Arrow Function
// class Personagem {
//   nome: string = "Arqueiro";
//   vida: number = 50;

//   curarComFuncaoTradicional() {
//     console.log(this.nome + " tomou uma poção...");

//     setTimeout(function () {
//       // 🚨 ERRO! O JavaScript perdeu o 'this'!
//       // Quem chama essa função interna após 2 segundos é o próprio navegador/sistema,
//       // não o nosso personagem. Então 'this.vida' vira undefined.
//       this.vida += 20;
//       console.log("Cura aplicada. Vida atual: " + this.vida);
//     }, 2000);
//   }
// }

// const heroi1 = new Personagem();
// heroi1.curarComFuncaoTradicional();

// Solução a Arrow funcion

// class Personagem {
//   nome: string = "Arqueiro";
//   vida: number = 50;

//   curarComArrow() {
//     console.log(this.nome + " tomou uma poção...");

//     // 🎯 Usando Arrow Function (() => {})
//     setTimeout(() => {
//       // ✅ FUNCIONA PERFEITAMENTE!
//       // O 'this' aqui dentro continua sendo o "Arqueiro".
//       this.vida += 20;
//       console.log("Cura aplicada. Vida atual: " + this.vida);
//     }, 2000);
//   }
// }

// const heroi1 = new Personagem();
// heroi1.curarComArrow();

// // Parâmetro Padrão
// function contagemRegressiva(
//   inicio: number = 5,
//   fim: number = inicio - 5,
// ): void {
//   console.log(inicio);
//   while (inicio > fim) {
//     inicio--;
//     console.log(inicio);
//   }
//   console.log("Fim!");
// }

// contagemRegressiva(3);
// contagemRegressiva();

// function contagemRegressiva(inicio: number = 3): void {
//   console.log(inicio);
//   while (inicio > 0) {
//     inicio--;
//     console.log(inicio);
//   }
//   console.log("Fim!");
// }

// contagemRegressiva();
// contagemRegressiva(5);

// Rest & Spread
const numbers = [1, 10, 99, -5];
console.log(Math.max(...numbers));

const turmaA: string[] = ["Raimison", "Rafaela", "Daiana"];
const turmaB: string[] = ["Araújo", "Campos", "Lima", ...turmaA];
console.log(turmaB);
