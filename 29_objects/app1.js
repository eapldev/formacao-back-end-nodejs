const car = {
  name: "Corolla",
  color: "White",
  fabrication: "2024",
  "size-car": "4 Metros",
  "air-bag": true,
};

// acessar propriedades de um objeto
console.log(car.name);
console.log(car["size-car"]);
console.log("=========================================");

// modificar o valor de uma propriedade
car.name = "Honda Civic";
console.log(car.name);

// criar uma nova propriedade
console.log("=========================================");
car.age = 2028;
console.log(car.age);

// deletar uma propriedade
console.log("=========================================");
delete car.age;
console.log(car.age);

// verificar se existe uma propriedade com esse nome
console.log("=========================================");
if ("name" in car) {
  console.log("Nome existe dentro de carro");
} else {
  console.log("Nome não existe dentro de carro");
}
