function transformCF() {
  let celcius = document.getElementById("cel").value;
  let resposta = document.getElementById("res");
  let resultado = (Number(celcius) * 9) / 5 + 32;
  resposta.innerHTML = `${resultado} °F `;
}
