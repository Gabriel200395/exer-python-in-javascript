let previsaoTempo = [
  { cidade: "brasilia", temperatura: 60 },
  { cidade: "São-paulo", temperatura: 80 },
  { cidade: "Goiania", temperatura: 3 },
  { cidade: "Belém", temperatura: 30 },
];

function minMaxTempo(mostrarTempo) {
  let min = previsaoTempo.reduce((tempMin, elTemp) => {
    if (elTemp.temperatura < tempMin.temperatura) {
      tempMin = elTemp;
    }
    return tempMin;
  });

  let max = previsaoTempo.reduce((tempMax, elTemp) => {
    if (elTemp.temperatura > tempMax.temperatura) {
      tempMax = elTemp;
    }
    return tempMax;
  });

  return mostrarTempo(min, max);
}

function mostrarTempo(temperaturaMinima, temperaturaMaxima) {
  console.log("Maxima");
  console.log(temperaturaMaxima);
  console.log("Minima");
  console.log(temperaturaMinima);
}

function somarTempo(mediaTempo) {
  let resultado = 0;
  for (pos in previsaoTempo) {
    resultado += previsaoTempo[pos].temperatura;
  }
  return mediaTempo(resultado);
}

function mediaTempo(resultado) {
  let medio = resultado / previsaoTempo.length;
  console.log(" A media de temperatura no pais " + medio);
}

minMaxTempo(mostrarTempo);
somarTempo(mediaTempo);

// let previsaoTempo = [
//   { cidade: "brasilia", temperatura: 60 },
//   { cidade: "São-paulo", temperatura: 80 },
//   { cidade: "Goiania", temperatura: 3 },
//   { cidade: "Belém", temperatura: 30 },
// ];
// previsaoTempo.sort((a, b) => (a.temperatura > b.temperatura ? 1 : -1));
// let menorValor = previsaoTempo[0];
// let maiorValor = previsaoTempo[previsaoTempo.length - 1];
// console.log(maiorValor);
// console.log(menorValor);
