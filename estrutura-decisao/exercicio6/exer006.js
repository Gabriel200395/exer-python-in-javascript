function verificarMaiorNumero() {
  let numero1 = document.getElementById("num1").value;
  let numero2 = document.getElementById("num2").value;
  let numero3 = document.getElementById("num3").value;

  if (Number(numero1) > Number(numero2) && Number(numero2) < Number(numero1)) {
    console.log(`numero ${numero1} e o maior`);
  } else if (
    Number(numero2) > Number(numero1) &&
    Number(numero1) < Number(numero2)
  ) {
    console.log(`numero ${numero2} e o maior`);
  } else if (
    Number(numero3) > Number(numero2) &&
    Number(numero2) < Number(numero3)
  ) {
    console.log(`numero ${numero3} e o maior`);
  }
}
