let valor = Number(prompt("escreva um valor"));
let contador = 0;

while (contador <= valor) {
  if (valor % valor == 0) {
    console.log("primo");
  } else {
    console.log("esse numero e divisi");
  }
  break;
}
