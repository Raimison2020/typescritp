// 36. Compilação e “onEmitOnError”
let canal: string = 'Gaveta'
let inscritos: number = 62343

// canal = inscritos
console.log(`Canal = ${canal}`)

// 40. “strictNullChecks”, “noUnusedParameters” e “noUnusedLocals”
function saudar(isManha: boolean, horas: number): string {
  let saudacao: string
  if (isManha) {
    saudacao = 'Bom dia'
  } else {
    saudacao = 'Tenha uma boa vida!'
  }
  return saudacao
}