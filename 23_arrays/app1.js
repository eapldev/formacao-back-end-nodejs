//                   0         1        2             3
const peoples = ["Eduardo", "João", "Izabelle", "Maria Eduarda"];
console.log(peoples.length);
console.log(peoples[2]);

for (let people of peoples) {
  console.log(people);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

for (const n of numbers) {
  console.log(n);
}

const allTypes = ["Eduardo", 1.6, true, "Izabelle", 1.6, false];

for (const infos of allTypes) {
  console.log(infos);
}
