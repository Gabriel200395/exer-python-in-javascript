let cumbustivel = prompt("escreva o tipo do combustivel");
let litro = Number(prompt("quantidade de litros"));

if (cumbustivel === "A" && litro <= 20) {
  let alcool = 1.9;
  let custoAlcool = litro * alcool;
  let desconto = (custoAlcool * 3) / 100;
  let total = custoAlcool - desconto;
  console.log(
    "valor total para pagar com desconto " + desconto + " R$ " + total
  );
} else if (cumbustivel === "A" && litro > 20) {
  let alcool = 1.9;
  let custoAlcool = litro * alcool;
  let desconto = (custoAlcool * 5) / 100;
  let total = custoAlcool - desconto;
  console.log(
    "valor total para pagar com desconto " + desconto + " R$ " + total
  );
} else if (cumbustivel === "G" && litro <= 20) {
  let gasolina = 2.5;
  let custoGasolina = litro * gasolina;
  let desconto = (custoGasolina * 4) / 100;
  let total = custoGasolina - desconto;
  console.log(
    "valor total para pagar com desconto " + desconto + " R$ " + total
  );
} else if (cumbustivel === "G" && litro > 20) {
  let gasolina = 2.5;
  let custoGasolina = litro * gasolina;
  let desconto = (custoGasolina * 6) / 100;
  let total = custoGasolina - desconto;
  console.log(
    "valor total para pagar com desconto " + desconto + " R$ " + total
  );
}
