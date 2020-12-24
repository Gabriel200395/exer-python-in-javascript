function anoBissexto() {
  let ano = document.getElementById("ano").value;
  if ((ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0) {
    console.log("ano informado e bissexto");
  } else {
    console.log("ano informado não  e bissexto");
  }
}
