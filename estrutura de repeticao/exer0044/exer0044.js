let eleicaoEleitoral = [
  { cadanditado: 1, quantidadeVotos: 1250 },
  { cadanditado: 2, quantidadeVotos: 1130 },
  { cadanditado: 3, quantidadeVotos: 1120 },
  { cadanditado: 4, quantidadeVotos: 1110 },
  { quantidadeVotosNulos: 100 },
  { quantidadeBrancos: 600 },
];

// filtrar cada canditado
let filtrarCandidato = eleicaoEleitoral.filter((candidato) => {
  return candidato.quantidadeVotos;
});

console.log(filtrarCandidato);

// porcentagem de votos nulos sobre total de votos
let totalNulos = eleicaoEleitoral[4].quantidadeVotosNulos;
let total = 0;
for (pos in filtrarCandidato) {
  total += filtrarCandidato[pos].quantidadeVotos / Number(totalNulos);
}
console.log(" media de votos nulos foi de " + total.toFixed(1) + "%");

// porcentagem de votos brancos sobre total de votos
let totalBrancos = eleicaoEleitoral[5].quantidadeBrancos;
let totalB = 0;
for (pos in filtrarCandidato) {
  totalB += filtrarCandidato[pos].quantidadeVotos / Number(totalBrancos);
}
console.log(" media de votos brancos foi de " + totalB.toFixed(1) + "%");
