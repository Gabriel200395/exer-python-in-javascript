function calcularQuadrado() {
  let area = document.getElementById("area-quadrado").value;
  let resposta = document.getElementById("res");
  let resuldado = Number(area) * Number(area) * 2;
  resposta.innerHTML = `Calcular ${resuldado} cm`;
}
