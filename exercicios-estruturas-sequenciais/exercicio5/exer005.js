function converterCmKm() {
  let metros = document.getElementById("metros").value;
  let resposta = document.getElementById("res");
  let cm = 100;
  let converter = Number(metros) * cm;
  resposta.innerHTML = `${metros} Metros = ${converter} Centimetros`;
}
