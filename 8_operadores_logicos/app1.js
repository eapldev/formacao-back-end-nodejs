// operadores lógicos

// and lógico (&&)
// para que retorne um verdadeiro (true) as duas condições devem ser verdadeiras
// true && true = true
// false && false = true
// true && false = false
// false && true = false
console.log("AND LÓGICO (&&)");
console.log("true && true:", true && true);
console.log("false && true:", false && true);
console.log("10 >= 10 && 11 >= 11:", 10 >= 10 && 11 >= 11);

console.log("================================================");

// or lógico (||)
// para que retorne um verdadeiro (true) uma das condições devem ser verdadeiras
// true || true = true
// false || false = false
// true || false = true
// false || true = true
console.log("OR LÓGICO (||)");
console.log("true || true:", true || true);
console.log("false || true:", false || true);
console.log("false || false:", false || false);
console.log("10 >= 10 || 11 >= 11:", 10 >= 10 || 11 >= 11);

console.log("================================================");

// not lógico (!)
console.log("NOT LÓGICO (!)");

const usuarioAtivo = true;
const inscrito = false;

console.log("usuarioAtivo:", usuarioAtivo);
console.log("usuarioAtivo:", !usuarioAtivo);
console.log("inscrito", !inscrito);

console.log("10 >= 10 && 11 >= 11:", !(10 >= 10) && 11 >= 11);
console.log("10 >= 10", 10 >= 10);
console.log("!10 >= 10", !(10 >= 10));
