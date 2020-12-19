function verifcarMenorNumero() {
  let numero1 = document.getElementById("num1").value;
  let numero2 = document.getElementById("num2").value;
  let numero3 = document.getElementById("num3").value;

  if (numero1 < numero2) {
    console.log(`numero ${numero1} e o menor`);
  } else if (numero2 < numero1) {
    console.log(`numero ${numero2} e o menor`);
  } else if (numero3 < numero2) {
    console.log(`numero ${numero3} e o menor`);
  }
}
