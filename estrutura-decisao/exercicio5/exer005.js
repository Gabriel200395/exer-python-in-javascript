function calcularMedia() {
  let portugues = document.getElementById("portugues").value;
  let matematica = document.getElementById("matematica").value;
  let resposta = document.getElementById("res");
  let media = (Number(portugues) + Number(matematica)) / 2;
  console.log(media);

  if (media >= 7 && media < 10) {
    console.log("aprovado");
  } else if (media >= 10) {
    console.log("aprovado com distintição");
  } else {
    console.log("reprovado");
  }
}
