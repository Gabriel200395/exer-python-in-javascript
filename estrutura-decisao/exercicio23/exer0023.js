let valor = Number(prompt("qual valor deseja sacar ??"));

while (valor >= 601) {
  valor -= valor;
  document.write("O valor mínimo é de 10 reais e o máximo de 600 reais ");
}

while (valor >= 100) {
  valor -= 100;
  document.write(" R$100 ");
}

while (valor >= 50) {
  valor -= 50;
  document.write(" R$50 ");
}

while (valor >= 10) {
  valor -= 10;
  document.write(" R$10 ");
}

while (valor >= 5) {
  valor -= 5;
  document.write(" R$5 ");
}
while (valor >= 1) {
  valor -= 1;
  document.write(" R$1 ");
}
