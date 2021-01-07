let tabuada = Number(prompt("valor da tabuada"));
let inicio = Number(prompt("inicio da tabuada"));
let fim = Number(prompt("fim de tabuada"));

for (i = inicio; i <= fim; i++) {
  console.log(`${tabuada} x ${i} = ${tabuada * i}`);
}
