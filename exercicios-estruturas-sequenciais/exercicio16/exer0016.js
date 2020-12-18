function usarmentoTinta() {
  let metros = document.getElementById("metros").value;
  let resposta = document.getElementById("res");

  let litros = metros / 3;

  let precoL = 80.0;
  let quantidadeL = 18;

  let latas = litros / quantidadeL;
  let total = latas * precoL;

  resposta.innerHTML = `Para pintar o metro que foi informado
  tera que comprar ${latas.toFixed(0)} latas de tinta, o valor total a paga 
  sera ${total.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })}`;
}
