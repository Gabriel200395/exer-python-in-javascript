function calcularCirculo() {
  let raio = document.getElementById("raio-circulo").value;
  let resposta = document.getElementById("res");
  let pi = 3.14;
  let resultado = pi * Number(raio) * Number(raio);
  resposta.innerHTML = `${resultado} cm`;
}
