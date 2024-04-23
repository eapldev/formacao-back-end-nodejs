const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// const array3 = array1.concat(array2);

// operator spread

const array3 = [...array1, ...array2];

console.log(array3);

// spread operator objetos

const person = {
  id: 1,
  name: "Eduardo",
};

const personAddres = {
  city: "Maringá",
};

const completedPerson = {
  ...person,
  ...personAddres,
};

console.log(completedPerson);
