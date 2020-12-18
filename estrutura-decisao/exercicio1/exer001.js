function verificarMaior() {
  let numero1 = document.getElementById("num1").value;
  let numero2 = document.getElementById("num2").value;

  if (numero1 > numero2) {
    alert(`o numero maior e ${numero1}`);
  } else if (numero2 > numero1) {
    alert(`o numero maior e ${numero2}`);
  }
}
