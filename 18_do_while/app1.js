let resultado = "";
let i = 0;

do {
  i++;

  resultado += i + "";
  console.log(resultado, "Dentro do while");
} while (i < 5);

console.log(resultado, "Fora do while");
