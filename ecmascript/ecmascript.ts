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
