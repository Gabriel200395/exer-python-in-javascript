function usarmentoTinta() {
  let metros = document.getElementById("metros").value;
  let gl = document.getElementById("gl").value;
  let resposta = document.getElementById("res");

  let litros = metros / 6;

  if (gl === "latas") {
    let precoL = 80.0;
    let capacidadeL = 18;
    let latas = litros / capacidadeL;
    let total = latas * precoL;
    resposta.innerHTML = `Você ira comprar ${latas.toFixed(
      0
    )} lata de  tinta e o valor a pagar 
    ${total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}  `;
  } else if (gl === "galões") {
    let capacidadeG = 3.6;
    let precoG = 25.0;
    let galoes = litros / capacidadeG;
    let total = galoes * precoG;
    resposta.innerHTML = `Você ira comprar ${galoes.toFixed(
      0
    )} galāo de tinta e o valor a pagar 
    ${total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}  `;
  } else if (gl === "latas e galões") {
    let capacidadeL = 18;
    let capacidadeG = 3.6;
    let precoL = 80.0;
    let precoG = 25.0;
    let galoes = litros / capacidadeG;
    let latas = litros / capacidadeL;
    let resultadoLG = galoes + latas - 0.1;
    let total = (precoG + precoL) * resultadoLG;
    resposta.innerHTML = `voce irar comprar ${resultadoLG.toFixed(
      0
    )} lata e galāo de tintas e o total a pagar ${total.toLocaleString(
      "pt-BR",
      {
        style: "currency",
        currency: "BRL",
      }
    )}`;
  }
}
