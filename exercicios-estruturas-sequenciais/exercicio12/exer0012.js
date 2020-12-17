function pesoIdeal() {
  let altura = document.getElementById("altura").value;
  let resposta = document.getElementById("res");
  let resultado = 72.7 * altura - 58;

  resposta.innerHTML = `O seu peso baseado na sua altura e de ${resultado}`;
}
