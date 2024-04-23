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

const filteredPeoples = peoples.filter((item) => item.length > 5);

console.log(peoples);
console.log(filteredPeoples);

const justMyName = peoples.filter((item) => item === "Eduardo");
console.log(justMyName);
