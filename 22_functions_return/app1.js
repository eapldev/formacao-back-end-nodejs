function sumNumbers(n1, n2, n3, n4) {
  const sum = n1 + n2 + n3 + n4;
  console.log(sum);

  return sum;
}

function media(sum) {
  const studentMedia = sum / 4;

  return studentMedia;
}

const studentScore = sumNumbers(10, 10, 10, 10);

console.log(media(studentScore));

if (media(studentScore) === 10) {
  console.log("Melhor nota da sala!");
} else if (media(studentScore) < 5) {
  console.log("Aluno em recuperação!");
} else {
  console.log("Aluno aprovado!");
}
