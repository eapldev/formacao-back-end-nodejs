const cars = ["Corolla", "Honda Civic", "Land Rover", "Volkswagen"];

// reverse inverte as posições do array
console.log(cars);
cars.reverse();
console.log(cars, "cars após o reverse");
console.log("=======================================================");

// foreach percorre todos os elementos do array
function logPositions(item) {
  //   console.log(item);
}
cars.forEach(logPositions);
cars.forEach((item, index) => console.log(item, index));
console.log("=======================================================");

const otherCars = cars.map((car) => car);
console.log(otherCars, "otherCars");