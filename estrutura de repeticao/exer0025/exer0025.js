let arrayIdade = [];

function validaDadoArray(valor) {
  if (valor == "") {
    console.log("Não foi possivel calcular media de idade");
  } else {
    addiconarIdadeArray(valor);
  }
  return valor;
}

function addiconarIdadeArray(valor) {
  arrayIdade.push(valor);
  return valor;
}

function percorrerIdadeArray(array, calcularIdade) {
  for (i = 0; i < array.length; i++) return calcularIdade(array[i], mediaIdade);
}

function calcularIdade(indiceIdade, mediaIdade) {
  let indice = arrayIdade.reduce((total, indiceIdade) => {
    return total + indiceIdade / arrayIdade.length;
  }, 0);

  return indiceIdade, mediaIdade(indice);
}

function mediaIdade(idadePessoa) {
  if (idadePessoa > 10 && idadePessoa <= 24) {
    console.log("a media de idade da turma e jovem : " + idadePessoa);
  } else if (idadePessoa >= 25 && idadePessoa <= 60) {
    console.log("a media de idade da turma e adulta : " + idadePessoa);
  } else {
    console.log("a media de idade da turma e idosa : " + idadePessoa);
  }
  return idadePessoa;
}

function Idade() {
  let idade = Number(document.getElementById("idade").value);
  validaDadoArray(idade);
  percorrerIdadeArray(arrayIdade, calcularIdade);
}
