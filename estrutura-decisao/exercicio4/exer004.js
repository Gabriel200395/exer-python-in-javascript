function verificarConsoanteVogal() {
  let letra = document.getElementById("letra").value;
  if (
    letra === "B" ||
    letra === "C" ||
    letra === "D" ||
    letra === "F" ||
    letra === "G" ||
    letra === "J" ||
    letra === "K" ||
    letra === "L" ||
    letra === "M" ||
    letra === "N" ||
    letra === "P" ||
    letra === "Q" ||
    letra === "R" ||
    letra === "S" ||
    letra === "T" ||
    letra === "V" ||
    letra === "W" ||
    letra === "X" ||
    letra === "Z"
  ) {
    console.log("Essa letra e uma consoante");
  } else if (
    letra === "A" ||
    letra === "E" ||
    letra === "I" ||
    letra === "O" ||
    letra === "U"
  ) {
    console.log("Essa letra e uma Vogal");
  }
}
