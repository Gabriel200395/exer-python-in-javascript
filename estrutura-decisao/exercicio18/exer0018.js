function verificarData() {
  let dia = document.getElementById("dia").value;
  let mes = document.getElementById("mes").value;
  let ano = document.getElementById("ano").value;
  let resposta = document.getElementById("res");

  resposta.innerHTML = moment(`${dia}/${mes}/${ano}`, true).isValid();
}
