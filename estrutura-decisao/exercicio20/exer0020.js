function validarNota() {
  let portugues = document.getElementById("portugues").value;
  let matematica = document.getElementById("matematica").value;
  let ingles = document.getElementById("ingles").value;
  let media = (Number(portugues) + Number(matematica) + Number(ingles)) / 3;
  if (media > 7 && media <= 10) {
    console.log("aprovado");
  } else if (media <= 7) {
    console.log("reprovado");
  } else if (media >= 10) {
    console.log("Aprovado com Distinção");
  }
}
