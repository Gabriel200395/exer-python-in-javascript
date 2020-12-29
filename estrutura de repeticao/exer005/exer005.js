let populacaoA = Number(prompt("população A"));
let populacaoB = Number(prompt("população B"));
let ano = 0;
while (populacaoA < populacaoB) {
  populacaoA += (populacaoA * 0.3) / 100;
  populacaoB += (populacaoB * 0.15) / 100;
  ano += 1;
  console.log(
    "levará" + ano + " ano para população da cidade A ser maior que a cidade B "
  );
  console.log("populaçãoB--> ", +populacaoB + " habitantes ");
  console.log("populaçãoA--> ", +populacaoA + " habitantes ");

  break;
}
