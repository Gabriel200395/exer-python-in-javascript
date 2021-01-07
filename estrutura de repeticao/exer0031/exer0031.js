let produto = prompt("qual produto gostaria");
let valorPago = Number(prompt("valor a pagar nos produtos"));

let arrayProdutos = [
  { produto: "1 -", valor: "R$ 2.20" },
  { produto: "2 -", valor: "R$ 5.20" },
  { produto: "3 -", valor: "R$ 10.20" },
];

function calcularValorProduto(valor1, valor2, valor3) {
  while (produto === "1") {
    let total = valor1;
    let troco = valorPago - total;
    let inforProduto = `1 - ${valor1.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })}`;
    valorFinalCompra(total, valorPago, inforProduto, troco);
    break;
  }
  while (produto === "2") {
    let total = valor2;
    let troco = valorPago - total;
    let inforProduto = `2 - ${valor2.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })}`;
    valorFinalCompra(total, valorPago, inforProduto, troco);
    break;
  }
  while (produto === "3") {
    let total = valor3;
    let troco = valorPago - total;
    let inforProduto = `3 - ${valor3.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })}`;
    valorFinalCompra(total, valorPago, inforProduto, troco);
    break;
  }

  while (produto === "1 e 2") {
    let total = valor1 + valor2;
    let troco = valorPago - total;
    let inforProduto = `1- ${valor1.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })} 2- ${valor2.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })} `;
    valorFinalCompra(total, valorPago, inforProduto, troco);
    break;
  }
  while (produto === "2 e 3") {
    let total = valor2 + valor3;
    let troco = valorPago - total;
    let inforProduto = `2- ${valor2.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })} 3- ${valor3.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })}  `;
    valorFinalCompra(total, valorPago, inforProduto, troco);
    break;
  }
}

function valorFinalCompra(total, valorPg, proIn, troco) {
  console.log(
    "Lojas tabajaras" +
      " produto:" +
      proIn +
      " total:" +
      total.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      }) +
      " valor pago:" +
      valorPg.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      }) +
      " troco:" +
      troco.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })
  );
}

function tabelaValores(calcularValorProduto) {
  let produto1 = 2.2;
  let produto2 = 5.2;
  let produto3 = 10.2;
  return calcularValorProduto(produto1, produto2, produto3);
}

tabelaValores(calcularValorProduto);
