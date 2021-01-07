let tabuada = Number(prompt("valor da tabuada"));
let inicio = Number(prompt("inicio da tabuada"));
let fim = Number(prompt("fim de tabuada"));

if (inicio < fim) {
  for (i = inicio; i <= fim; i++) {
    console.log(`${tabuada} x ${i} = ${tabuada * i}`);
  }
} else {
  for (i = inicio; i >= fim; i--) {
    console.log(`${tabuada} x ${i} = ${tabuada * i}`);
  }
}
