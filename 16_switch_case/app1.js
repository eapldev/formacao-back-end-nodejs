const nome = "Eduardo";

// if (nome === "Eduardo") {
//   console.log("O nome é Eduardo");
// } else if (nome === "Maria") {
//   console.log("O nome é Maria");
// } else {
//   console.log("Nome desconhecido");
// }

switch (nome) {
  case "Eduardo":
    console.log("O nome é Eduardo");
    break;
  case "Maria":
    console.log("O nome é Maria");
    break;

  default:
    console.log("Nome desconhecido");
}
