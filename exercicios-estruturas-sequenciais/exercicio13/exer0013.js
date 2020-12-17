function pesoIdeal() {
  let altura = document.getElementById("altura").value;
  let sexo = document.getElementById("sexo").value;
  let resposta = document.getElementById("res");

  sexo = sexo.split(" ");
  console.log(sexo);

  for (i = 0; i < sexo.length; i++) {
    if (sexo[i] === "Masculino") {
      let alturaH = 72.7 * altura - 58;
      resposta.innerHTML = `O seu peso ideal ${alturaH}`;
    } else if (sexo[i] === "Femenino") {
      let alturaF = 62.1 * altura - 44.7;
      resposta.innerHTML = `O seu peso ideal ${alturaF}`;
    }
  }
}
