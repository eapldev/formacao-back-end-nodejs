// function sum(n1, n2, n3) {
//   return n1 + n2 + n3;
// }

// console.log(sum(2, 2, 6));

function sum(...args) {
  //   let total = 0;

  //   for (number of args) {
  //     total += number;
  //   }

  const initialValue = 0;
  const total2 = args.reduce(
    (acumulador, currentValue) => acumulador + currentValue,
    initialValue
  );

  return total2;
}

console.log(sum(1, 2, 3, 4, 10));
