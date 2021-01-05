let eleitor = Number(prompt("deseja voltar em qual canditado 12, 13 ou 25"));

let eletorValor = 0;
while (eleitor == 12 || eleitor == 13 || eleitor == 25) {
  eletorValor++;
  console.log(
    " O eleitor " +
      eleitor +
      " teve uma pontuação maior que os outros recebendo, " +
      eletorValor +
      " voto " +
      " e o restante teve 0 votos"
  );
  break;
}
