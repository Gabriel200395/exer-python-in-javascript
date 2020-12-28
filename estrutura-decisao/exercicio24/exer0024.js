let numero = Number(prompt("digite um numero"));
let numeroOne = Number(prompt("digite outro numero"));
let tipoCalculo = prompt("escreva qual tipo de calculo gostaria");

function calculo(num, num1) {
  if (tipoCalculo === "somar") {
    let resultado = (num += num1);
    impPar(resultado);
    negativoPos(resultado);
    decimalInt(resultado);
  } else if (tipoCalculo === "multiplicar") {
    let resultado = (num *= num1);
    impPar(resultado);
    negativoPos(resultado);
    decimalInt(resultado);
  } else if (tipoCalculo === "subtrair") {
    let resultado = (num -= num1);
    impPar(resultado);
    negativoPos(resultado);
    decimalInt(resultado);
  } else if (tipoCalculo === "divisão") {
    let resultado = (num /= num1);
    impPar(resultado);
    negativoPos(resultado);
    decimalInt(resultado);
  }
}

calculo(numero, numeroOne);

function impPar(valor) {
  if (valor % 2) {
    console.log("impar");
  } else {
    console.log("par");
  }
  return valor;
}

function negativoPos(valor) {
  if (valor < 0) {
    console.log("negativo");
  } else {
    console.log("positivo");
  }
  return valor;
}

function decimalInt(valor) {
  if (valor > 0) {
    console.log("numero inteiro");
  } else {
    console.log("numero decimal");
  }

  return valor;
}
