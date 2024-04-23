// const geolib = require("geolib");

// console.log(geolib.convertSpeed(20000000, "kmh"));

const user = {
  name: "Eduardo",
  age: 21,
};

console.log(user, "OBJECT");
console.log(user.name, "OBJECT NAME");
const userJson = JSON.stringify(user);
console.log(userJson, "JSON");
console.log(userJson.name, "JSON NAME");

const userParsedJson = JSON.parse(userJson);
console.log(userParsedJson, "JSON PARSED");
console.log(userParsedJson.name, "JSON PARSED NAME");