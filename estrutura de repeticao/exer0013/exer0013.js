function potencial(base, expoente) {
  if (expoente == undefined) {
    expoente = 2;
  }
  let resultado = 1;
  for (i = 0; i <= expoente; i++) {
    console.log((resultado *= base));
  }
  return resultado;
}

potencial(3);
