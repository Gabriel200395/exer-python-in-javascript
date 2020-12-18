function verificarSalario() {
  let metros = document.getElementById("metros").value;
  let resposta = document.getElementById("res");

  let litros = metros / 3;

  let preco = 80.0;
  let quantidadeT = 18;

  let latas = litros / quantidadeT;
  let total = latas * preco;

  resposta.innerHTML = `Para pintar o metro que foi informado
  tera que comprar ${latas.toFixed(0)} latas de tinta, o valor total a paga 
  sera ${total.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })}`;
}
