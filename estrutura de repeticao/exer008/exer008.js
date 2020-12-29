let numero = prompt("escreva um numero!");
numero = numero.split(" ");
for (i = 0; i < numero.length; i++) {
  let resultado = (numero[i] * 2) / 2;
  console.log(" a media do seu numero e :" + resultado);
}
