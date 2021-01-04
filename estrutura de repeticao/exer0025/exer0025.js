let arrayIdade = [];

function addiconarIdadeArray(valor) {
  arrayIdade.push(valor);
  console.log(arrayIdade);
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
  if (idadePessoa > 0 && idadePessoa <= 24) {
    console.log(
      "a media de idade da turma e jovem : " + idadePessoa.toFixed(0)
    );
  } else if (idadePessoa >= 25 && idadePessoa <= 60) {
    console.log(
      "a media de idade da turma e adulta : " + idadePessoa.toFixed(0)
    );
  } else {
    console.log(
      "a media de idade da turma e idosa : " + idadePessoa.toFixed(0)
    );
  }

  return idadePessoa;
}

function Idade() {
  let idade = Number(document.getElementById("idade").value);
  addiconarIdadeArray(idade);
  percorrerIdadeArray(arrayIdade, calcularIdade);
}
