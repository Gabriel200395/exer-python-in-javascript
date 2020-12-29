let nome = prompt("escreva um nome");
let idade = Number(prompt("escreva uma idade"));
let salario = Number(prompt("salario"));
let sexo = prompt("sexo");
let estadoCivil = prompt("estado civil");

while (nome.length <= 3) {
  console.log("nome valido!");
  break;
}

while (idade > 0 && idade <= 150) {
  console.log("idade valida!");
  break;
}

while (salario > 0) {
  console.log("salario valido!");
  break;
}

while (sexo === "f" || sexo === "m") {
  console.log("sexo valido!");
  break;
}

while (
  estadoCivil === "s" ||
  estadoCivil === "c" ||
  estadoCivil === "v" ||
  estadoCivil === "d"
) {
  console.log("estado valido!");
  break;
}
