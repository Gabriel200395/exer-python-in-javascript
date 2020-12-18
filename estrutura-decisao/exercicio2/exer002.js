function validarNumero() {
  let numero = document.getElementById("numero").value;
  let resuldado = numero < 0 ? "numero invalido" : "numero positivo";
  validar(resuldado);
}

function validar(resuldado) {
  return console.log(resuldado);
}
