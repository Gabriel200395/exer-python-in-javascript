let saltosAtleta = [];

function percorrerSaltos(nome, salto, numeroPuloSalto) {
  if (nome.length == 0) {
    console.log("erro!!");
  } else {
    saltosAtleta.push({ nome, salto, numeroPuloSalto });
    indiceSaltos(saltosAtleta, maiorMenor);
  }
}

function indiceSaltos(pulosAtleta) {
  return maiorMenor(pulosAtleta);
}

function maiorMenor(pulosAtleta) {
  let menorSalto = pulosAtleta[0];
  let maiorSalto = pulosAtleta[0];
  for (i = 0; i < pulosAtleta.length; i++) {
    if (pulosAtleta[i].salto < menorSalto.salto) {
      menorSalto = pulosAtleta[i];
    } else if (pulosAtleta[i].salto > maiorSalto.salto) {
      maiorSalto = pulosAtleta[i];
    }
  }

  return calcularMediaSaltos(maiorSalto, menorSalto, pulosAtleta);
}

function calcularMediaSaltos(maior, menor, pulosAtleta) {
  let somar = maior.salto + menor.salto;
  let total = 0;

  if (somar > total) {
    total = somar;
  }
  let media = total / 2;

  console.log(pulosAtleta);
  console.log(
    " maior salto: " +
      maior.salto +
      " m " +
      " menor salto: " +
      menor.salto +
      " m " +
      " de salto media: " +
      media +
      " m " +
      " Resultado final " +
      menor.nome +
      ":" +
      media +
      " m "
  );

  return maior, menor, pulosAtleta;
}

function verificarSaltos() {
  let nome = document.getElementById("nome").value;
  let salto = Number(document.getElementById("salto").value);
  let numero = Number(document.getElementById("numero").value);
  percorrerSaltos(nome, salto, numero);
}
