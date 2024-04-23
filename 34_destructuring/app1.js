const numbers = [1, 2, 3, 4, 5, 6];

const primeiraPosicao = numbers[0];
const segundaPosicao = numbers[1];
const terceiraPosicao = numbers[2];
const quartaPosicao = numbers[3];

console.log(primeiraPosicao, segundaPosicao, terceiraPosicao, quartaPosicao);

// mesclando desestruturação com rest parameters
const [primeira, segunda, terceira, ...resto] = numbers;
console.log(primeira, segunda, terceira, resto);

// desestruturação com objetos
const person = {
  name: "Eduardo",
  age: "21",
  city: "Maringá",
};

const myName = person.name;

const { name, city, age } = person;

console.log(name, age, city);
