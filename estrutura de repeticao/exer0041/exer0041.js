let valorDivida = Number(prompt("valor da divida"));
let quantidadesPg = Number(prompt("quantidade de pagamento"));

let quantidade1 = 0;
let quantidade3 = 0.1;
let quantidade6 = 0.15;
let quantidade9 = 0.2;
let quantidade12 = 0.25;

function pagamento() {
  let parcelas = 0;
  for (i = 0; i <= quantidadesPg; i++) {
    parcelas = i;
  }
  validarPagamento(parcelas);
}

function validarPagamento(parcela) {
  if (parcela === 0) {
    let valorTotal = valorDivida;
    boleto(valorTotal);
  } else if (parcela === 3) {
    let valorJuros = valorDivida * quantidade3;
    let valorTotal = valorJuros + valorDivida;
    let valorParcelado = valorTotal / quantidadesPg;
    boleto(valorTotal, valorJuros, quantidadesPg, valorParcelado);
  } else if (parcela === 6) {
    let valorJuros = valorDivida * quantidade6;
    let valorTotal = valorJuros + valorDivida;
    let valorParcelado = valorTotal / quantidadesPg;
    boleto(valorTotal, valorJuros, quantidadesPg, valorParcelado);
  } else if (parcela === 9) {
    let valorJuros = valorDivida * quantidade9;
    let valorTotal = valorJuros + valorDivida;
    let valorParcelado = valorTotal / quantidadesPg;
    boleto(valorTotal, valorJuros, quantidadesPg, valorParcelado);
  } else if (parcela === 12) {
    let valorJuros = valorDivida * quantidade12;
    let valorTotal = valorJuros + valorDivida;
    let valorParcelado = valorTotal / quantidadesPg;
    boleto(valorTotal, valorJuros, quantidadesPg, valorParcelado);
  }
  return parcela;
}

function boleto(valorTotal, valorJuros, quantidadesPg, valorParcelado) {
  let juros = " não a juros pagamento a vista! ";
  let qntParcela = " quantidade de parcela 0 valor a vista! ";
  let valorParcela = " quantidade de parcelo 0 ";

  console.log(" valor total da divida: " + valorTotal);
  console.log(" valor dos juros: " + (valorJuros || juros));
  console.log(" quantidades de pagammento: " + (quantidadesPg || qntParcela));
  console.log(" valor de parcelas: " + (valorParcelado || valorParcela));
}

pagamento();
