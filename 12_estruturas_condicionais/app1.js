const media = (10 + 3 + 7 + 6) / 4;
console.log(media);
let resultado;

if (media == 10) {
  resultado = "Aluno aprovado com nota 10";
} else if (media >= 7 && media <= 9) {
  resultado = "Aluno aprovado com uma boa nota";
} else if (media >= 6 && media < 7) {
  resultado = "Aluno será encaminhado para a recuperação";
} else {
  resultado = "Aluno reprovado";
}

console.log(resultado);
