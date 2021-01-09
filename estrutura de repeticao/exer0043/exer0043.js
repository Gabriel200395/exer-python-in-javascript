let codigo = Number(prompt("codigo do lanche"));
let quantidade = Number(prompt("quantidade de lanche"));

let codigo100 = 1.2;
let codigo101 = 1.3;
let codigo102 = 1.5;
let codigo103 = 1.2;
let codigo104 = 1.3;
let codigo105 = 1.0;

let codigoLanche = 0;
while (codigo > codigoLanche) {
  codigoLanche = codigo;
  calcularPreco(codigoLanche);
  break;
}

function calcularPreco(cdlanche) {
  switch (cdlanche) {
    case 100:
      calcularPrecoTotal = quantidade * codigo100;
      console.log(
        " total a pagar " + "R$" + calcularPrecoTotal.toFixed(1) + "0"
      );
      break;
    case 101:
      calcularPrecoTotal = quantidade * codigo101;
      console.log(
        " total a pagar " + "R$" + calcularPrecoTotal.toFixed(1) + "0"
      );
      break;
    case 102:
      calcularPrecoTotal = quantidade * codigo102;
      console.log(
        " total a pagar " + "R$" + calcularPrecoTotal.toFixed(1) + "0"
      );
      break;
    case 103:
      calcularPrecoTotal = quantidade * codigo103;
      console.log(
        " total a pagar " + "R$" + calcularPrecoTotal.toFixed(1) + "0"
      );
      break;
    case 104:
      calcularPrecoTotal = quantidade * codigo104;
      console.log(
        " total a pagar " + "R$" + calcularPrecoTotal.toFixed(1) + "0"
      );
      break;
    case 105:
      calcularPrecoTotal = quantidade * codigo105;
      console.log(
        " total a pagar " + "R$" + calcularPrecoTotal.toFixed(1) + "00"
      );
      break;
    case 105:
      calcularPrecoTotal = quantidade * codigo105;
      console.log(
        " total a pagar " + "R$" + calcularPrecoTotal.toFixed(1) + "00"
      );
      break;
    default:
      console.log("codigo não existente");
  }
  return cdlanche;
}
