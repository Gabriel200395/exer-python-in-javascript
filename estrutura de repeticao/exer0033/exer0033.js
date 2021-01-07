let previsaiTempo = [
  { cidade: "brasilia", temperatura: 60 },
  { cidade: "São-paulo", temperatura: 80 },
  { cidade: "Goiania", temperatura: 3 },
  { cidade: "Belém", temperatura: 30 },
];

function minMaxTempo(mostrarTempo) {
  let min = previsaiTempo.reduce((tempMin, elTemp) => {
    if (elTemp.temperatura < tempMin.temperatura) {
      tempMin = elTemp;
    }
    return tempMin;
  });

  let max = previsaiTempo.reduce((tempMax, elTemp) => {
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
  for (pos in previsaiTempo) {
    resultado += previsaiTempo[pos].temperatura;
  }
  return mediaTempo(resultado);
}

function mediaTempo(resultado) {
  let medio = resultado / previsaiTempo.length;
  console.log(" A media de temperatura no pais " + medio);
}

minMaxTempo(mostrarTempo);
somarTempo(mediaTempo);
