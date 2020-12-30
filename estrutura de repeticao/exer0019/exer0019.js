let numero = Number(prompt("escreva um valor A"));
let numeroOne = Number(prompt("escreva outro valor B"));

while (numero > 0 && numero <= 1000 && numero > numeroOne) {
  console.log(" esse e o maior numero " + numero);
  console.log(" esse e o menor numero " + numeroOne);
  console.log("a soma entre eles : " + (numero + numeroOne));
  break;
}

while (numeroOne > 0 && numeroOne <= 1000 && numeroOne > numero) {
  console.log(" esse e o maior numero " + numeroOne);
  console.log(" esse e o menor numero " + numero);
  console.log("a soma entre eles : " + (numero + numeroOne));
  break;
}
