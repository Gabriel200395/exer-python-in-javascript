function calcularMedia() {
  let portugues = Number(document.getElementById("portugues").value);
  let matematica = Number(document.getElementById("matematica").value);
  let media = (Number(portugues) + Number(matematica)) / 2;
  validarMedia(media);
}

function validarMedia(media) {
  console.log(media);
  if (media > 9 && media <= 10) {
    console.log("A - Aprovado");
  } else if (media > 7.5 && media <= 9) {
    console.log("B - Aprovado");
  } else if (media > 6 && media <= 7.5) {
    console.log("C - Aprovado");
  } else if (media > 4 && media <= 6) {
    console.log("D - Reprovado");
  } else if (media > 0 && media <= 4) {
    console.log("E - Reprovado");
  }
  return media;
}
