function verificarData() {
  let dia = document.getElementById("dia").value;
  let mes = document.getElementById("mes").value;
  let ano = document.getElementById("ano").value;
  let resposta = document.getElementById("res");

  if (dia <= 31 || mes > 12 || ano < 0) {
    console.log("data invalida");
  }
  if (
    mes == 1 ||
    mes == 3 ||
    mes == 5 ||
    mes == 7 ||
    mes == 10 ||
    (mes == 12 && dia >= 31)
  ) {
    console.log("mes com quantidade de dias errado");
  }
}
