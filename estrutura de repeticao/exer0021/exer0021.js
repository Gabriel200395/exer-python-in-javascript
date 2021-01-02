let valor = Number(prompt("escreva um valor"));
let contador = 1;

while (contador <= valor) {
  if (valor % 2 == 1) {
    console.log("primo");
  } else {
    console.log("não primo");
  }
  break;
}
