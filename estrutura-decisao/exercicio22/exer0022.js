let valor = Number(prompt("digite um número"));

function numeroDivisivel(num) {
  if (num % 2) {
    console.log("impar");
  } else {
    console.log("par");
  }
  return num;
}

function receberNumero() {
  numeroDivisivel(valor);
}

receberNumero();
