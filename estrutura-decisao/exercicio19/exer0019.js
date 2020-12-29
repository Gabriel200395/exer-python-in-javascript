let valor = prompt("escreva um numero");

if (valor <= 1000) {
  let centena = valor / 100;
  console.log("a centena desse numero e: " + centena.toFixed(0));
  //O que sobrar depois que tiramos as centenas, são as dezenas
  let dezena = (valor % 100) / 10;
  console.log("a dezena desse numero e: " + dezena.toFixed(0));

  //O que sobrar depois que tiramos as centenas e dezenas são as unidades
  let unidade = (valor % 100) % 10;
  console.log("a dezena desse numero e: " + unidade.toFixed(0));
}
