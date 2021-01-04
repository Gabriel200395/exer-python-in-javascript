let portugues = Number(prompt("valor da nota em português"));
let matematica = Number(prompt("valor da nota em matematica"));

let addNotaArray = [];

//addiconar nota no array
function addNota(verificarNota) {
  addNotaArray.push(portugues, matematica);
  return verificarNota(addNotaArray, calcularNota);
}

//verificar nota array
function verificarNota(array, calcularNota) {
  for (i = 0; i < array.length; i++) {
    calcularNota(array[i]);
  }
  return array;
}
//calcular nota array
function calcularNota(arrayIndice) {
  let calcular = (arrayIndice * 2) / 2;
  return console.log(calcular);
}
addNota(verificarNota);
