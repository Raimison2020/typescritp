// 36. Compilação e “onEmitOnError”
let canal = 'Gaveta';
let inscritos = 62343;
// canal = inscritos
console.log(`Canal = ${canal}`);
// 40. “strictNullChecks”, “noUnusedParameters” e “noUnusedLocals”
function saudar(isManha, horas) {
    let saudacao;
    if (isManha) {
        saudacao = 'Bom dia';
    }
    else {
        saudacao = 'Tenha uma boa vida!';
    }
    return saudacao;
}
export {};
