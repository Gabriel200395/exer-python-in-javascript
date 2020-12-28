function calcularPreco() {
  let carne = document.getElementById("tipocarne").value;
  let quilo = document.getElementById("kg").value;
  let cartao = document.getElementById("cartao").value;

  let fileDuplo5kg = 4.9;
  let alcatra5kg = 5.9;
  let picanha5kg = 6.9;
  let fileDuplo5kgAcima = 4.9;
  let alcatra5kgAcima = 5.9;
  let picanha5kgAcima = 6.9;

  if ((carne = 1 && quilo <= 5)) {
    let preco = quilo * fileDuplo5kg;
    desconto(preco, cartao);
  } else if ((carne = 1 && quilo > 5)) {
    let preco = quilo * fileDuplo5kgAcima;
    desconto(preco, cartao);
  } else if ((carne = 2 && quilo <= 5)) {
    let preco = quilo * alcatra5kg;
    desconto(preco, cartao);
  } else if ((carne = 2 && quilo > 5)) {
    let preco = quilo * alcatra5kgAcima;
    desconto(preco, cartao);
  } else if ((carne = 3 && quilo <= 5)) {
    let preco = quilo * picanha5kg;
    desconto(preco, cartao);
  } else if ((carne = 3 && quilo > 5)) {
    let preco = quilo * picanha5kgAcima;
    desconto(preco, cartao);
  }
}

function desconto(valorTotal, tipoPagamento) {
  let desconto = 0.5;
  if (tipoPagamento === "sim") {
    let descontoComprar = valorTotal - desconto;
    cupomFiscal(valorTotal, tipoPagamento, desconto, descontoComprar);
  } else {
    cupomSem(valorTotal);
  }
  return valorTotal, tipoPagamento;
}

function cupomFiscal(valorTotal, tipoPagamento, desconto, descontoComprar) {
  let resposta = document.getElementById("res");
  let output = "nao teve desconto";
  resposta.innerHTML = `<li>valor total da comprar:${valorTotal}</li> 
  <br/><li>${tipoPagamento}</li> 
  <br/>
  <li>${desconto}</li> 
  <br/>
  <li>${descontoComprar}</li> 
  `;
}

function cupomSem(valorTotal) {
  let resposta = document.getElementById("res");
  resposta.innerHTML = `<li>valor total :${valorTotal}</li> 
  `;
}
