let dadosTransito = [
  {
    Cd: "DF",
    cidade: "brasilia",
    ano: 1999,
    acidentes: 270,
    vitimas: 90,
    carros: 3000,
  },
  {
    Cd: "MA",
    cidade: "maranhão",
    ano: 1999,
    acidentes: 560,
    vitimas: 100,
    carros: 1000,
  },
  {
    Cd: "SP",
    cidade: "são paulo",
    ano: 1999,
    acidentes: 190,
    vitimas: 80,
    carros: 2000,
  },
  {
    Cd: "RG",
    cidade: "rio grande sul",
    ano: 1999,
    acidentes: 470,
    vitimas: 190,
    carros: 1700,
  },
  {
    Cd: "PR",
    cidade: "pernambuco",
    ano: 1999,
    acidentes: 370,
    vitimas: 200,
    carros: 8000,
  },
];

dadosTransito.sort((a, b) => (a.acidentes > b.acidentes ? 1 : -1));
let menorIndice = dadosTransito[0];
let maiorIndice = dadosTransito[dadosTransito.length - 1];
console.log(maiorIndice);
console.log(menorIndice);

// total de veiculo no 1999
let anoVeiculo = 0;
for (i = 0; i < dadosTransito.length; i++) {
  anoVeiculo += dadosTransito[i].carros;
}

// media de veiculo
let mediaVeiculo = 0;
for (i = 0; i < dadosTransito.length; i++) {
  mediaVeiculo += dadosTransito[i].carros / dadosTransito.length;
}

// vitimas nos acidente
let mortalidade = 0;
for (i = 0; i < dadosTransito.length; i++) {
  mortalidade += dadosTransito[i].vitimas;
}

// vitimas nos acidente
let acidentesTransito = 0;
for (i = 0; i < dadosTransito.length; i++) {
  acidentesTransito += dadosTransito[i].acidentes;
}

// media de aciente nas cidades menos 2000
let filtrarMenos2000 = dadosTransito.filter((dados) => {
  return dados.carros < 2000;
});

let mediaAc = 0;
for (pos in filtrarMenos2000) {
  mediaAc += filtrarMenos2000[pos].acidentes / filtrarMenos2000.length;
}

console.log(
  " total de veiculo no ano 1999 nas cidades da pesquisa " + anoVeiculo
);
console.log(" media de veiculo na cidades " + mediaVeiculo);
console.log(
  " indice de mortalidade no ano " +
    mortalidade +
    " em " +
    acidentesTransito +
    " acidentes "
);

console.log(" media de aciendes nas cidade com menos 2000 veiculos " + mediaAc);
