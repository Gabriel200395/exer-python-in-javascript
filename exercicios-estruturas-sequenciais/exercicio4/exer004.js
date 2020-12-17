function calcularNotaBimestral() {
  let portugues = document.getElementById("portugues").value;
  let matematica = document.getElementById("matematica").value;
  let historia = document.getElementById("historia").value;
  let quimica = document.getElementById("quimica").value;
  let resultado =
    (Number(portugues) +
      Number(matematica) +
      Number(historia) +
      Number(quimica)) /
    4;

  alert(" A media dos calculo das suas notas foi " + resultado);
}
