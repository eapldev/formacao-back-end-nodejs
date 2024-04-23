const peoples = [
  "Eduardo",
  "João",
  "Izabelle",
  "Maria Eduarda",
  "Vanessa",
  "Renan",
  "Diogo",
  "Luccas",
  "Eder",
];

const myNamePosition = peoples.find((item) => item === "Eduardo");
console.log(myNamePosition);

const myNamePositionIndex = peoples.findIndex((item) => item === "Eduardo");
console.log(myNamePositionIndex);
