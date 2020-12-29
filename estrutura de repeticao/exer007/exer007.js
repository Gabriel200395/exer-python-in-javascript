let valor = prompt("qual e o maior numero");

let maior = 0;
for (i = 0; i < valor.length; i++) {
  if (valor[i] > maior) {
    maior = valor[i];
    console.log(maior);
  }
}
