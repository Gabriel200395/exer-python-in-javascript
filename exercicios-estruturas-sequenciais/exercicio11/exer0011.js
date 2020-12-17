function calcular() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let num3 = document.getElementById("num3").value;
  let resposta = document.getElementById("res");

  let resul1 = Number(num1) * 2 * (num2 / 2);
  let resul2 = Number(num2) * 3 + Number(num3);
  let resul3 = Number(num3) ** 3;
  resposta.innerHTML = `o produto do dobro do primeiro com metade do segundo  ${resul1} <br />
   o triplo do primeiro com soma do terceiro  ${resul2} <br />
   o terceiro elevado  ao cubo  ${resul3} 
  `;
}
