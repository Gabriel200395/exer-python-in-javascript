function verificarData() {
  let dia = document.getElementById("dia").value;
  let mes = document.getElementById("mes").value;
  let ano = document.getElementById("ano").value;

  if (dia <= 31 && mes <= 12) {
    console.log("data valida");
  } else if (dia > 31 || mes > 12 || ano < 0) {
    console.log("data invalida");
  }
}
