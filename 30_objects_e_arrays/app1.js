const cars = [
  {
    id: 1,
    name: "Nissan R34",
  },
  {
    id: 2,
    name: "Toyota Supra",
  },
  {
    id: 3,
    name: "Nissan Silva S15",
  },
];

// acessar individualmente
console.log(cars[0].name);
console.log(cars[1].name);

console.log("=======================");

// acessar via loop
for (const car of cars) {
  console.log(car.name);
}

// adicionar outro objeto dentro do array
cars.push({
  id: 4,
  name: "Toyota AE86",
});

console.log("======================");

for (const car of cars) {
  console.log(car.name);
}
