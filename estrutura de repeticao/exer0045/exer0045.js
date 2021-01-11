let gabarito = [
  { 1: "A" },
  { 2: "B" },
  { 3: "C" },
  { 4: "A" },
  { 5: "E" },
  { 6: "E" },
  { 7: "D" },
  { 8: "C" },
  { 9: "B" },
  { 10: "A" },
];
let turma = prompt("que turma você");
let nome = prompt("Ola qual e o seu nome");
let perguntar1 = prompt("coloque a resposta do numero 1");
let perguntar2 = prompt("coloque a resposta do numero 2");
let perguntar3 = prompt("coloque a resposta do numero 4");
let perguntar4 = prompt("coloque a resposta do numero 5");
let perguntar5 = prompt("coloque a resposta do numero 5");
let perguntar6 = prompt("coloque a resposta do numero 6");
let perguntar7 = prompt("coloque a resposta do numero 7");
let perguntar8 = prompt("coloque a resposta do numero 8");
let perguntar9 = prompt("coloque a resposta do numero 9");
let perguntar10 = prompt("coloque a resposta do numero 10");

function contarNotaAluno(notas) {
  let contador = 0;
  gabarito.forEach((resposta) => {
    if (perguntar1 === "A" && perguntar1 === resposta[1]) {
      contador += 1;
    } else if (perguntar2 === "B" && perguntar2 === resposta[2]) {
      contador += 1;
    } else if (perguntar3 === "C" && perguntar3 === resposta[3]) {
      contador += 1;
    } else if (perguntar4 === "A" && perguntar4 === resposta[4]) {
      contador += 1;
    } else if (perguntar5 === "E" && perguntar5 === resposta[5]) {
      contador += 1;
    } else if (perguntar6 === "E" && perguntar6 === resposta[6]) {
      contador += 1;
    } else if (perguntar7 === "D" && perguntar7 === resposta[7]) {
      contador += 1;
    } else if (perguntar8 === "C" && perguntar8 === resposta[8]) {
      contador += 1;
    } else if (perguntar9 === "B" && perguntar9 === resposta[9]) {
      contador += 1;
    } else if (perguntar9 === "A" && perguntar9 === resposta[10]) {
      contador += 1;
    }
  });
  return notas(contador, validaNota);
}

// notas da turma
let arrayNotas = [];

function notas(valor, validaNota) {
  arrayNotas.push({ nome, turma, nota: valor });
  return validaNota(arrayNotas, mediaNotasPorTurma);
}

//Maior e menor nota
function validaNota(array, mediaNotasPorTurma) {
  array.sort((a, b) => (a.nota > b.nota ? 1 : -1));
  let menorNota = array[0];
  let maiorNota = array[array.length - 1];
  console.log(maiorNota);
  console.log(menorNota);

  return mediaNotasPorTurma(array);
}
//Media de nota
function mediaNotasPorTurma(array) {
  let total = 0;
  for (i = 0; i < array.length; i++) {
    total += array[i].nota;
  }
  console.log("media de nota por turma" + total);
  return array;
}

//Verificar quantidades de usuario no sistema
function sistema() {
  let sistema = prompt("deseja ainda utilizar o sistema");
  let contadorSistema = 0;
  if (sistema === "sim") {
    contadorSistema += 1;
  } else {
    console.log("muito obrigado por utilizar o nosso sitema");
  }
  console.log(contadorSistema);
}

contarNotaAluno(notas);
sistema();
