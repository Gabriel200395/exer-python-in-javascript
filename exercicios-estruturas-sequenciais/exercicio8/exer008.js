function calcularSalario() {
  let valor = document.getElementById("valor").value;
  let horas = document.getElementById("horas").value;
  let resposta = document.getElementById("res");
  let mes = document.getElementById("mes").value;
  let resultado = Number(valor) * Number(horas) * Number(mes);

  resposta.innerHTML = ` O seu salário referente ao mês ${resultado.toLocaleString(
    "pt-BR",
    { style: "currency", currency: "BRL" }
  )} `;
}
