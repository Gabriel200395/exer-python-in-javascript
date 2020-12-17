function pesoIdealPeixe() {
  let peso = document.getElementById("peso").value;
  let resposta = document.getElementById("res");
  if (peso > 50) {
    let multar = (peso - 50) * 4;
    resposta.innerHTML = `O peso do peixe esta acima do permitido <strong>VOCÊ ESTA MULTADO 
    devera paga esse valor
    ${multar.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })}</strong>`;
  } else {
    resposta.innerHTML = "Peso permetido";
  }
}
