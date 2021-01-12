let pares = [];
let impares = [];
let vetor = [];
for (i = 0; i <= 20; i++) {
  vetor.push(i);
  if (i % 2 == 0) {
    pares.push(i);
  } else if (!i % 2 == 0) {
    impares.push(i);
  }
}

console.log(pares);
console.log(impares);
console.log(vetor);
