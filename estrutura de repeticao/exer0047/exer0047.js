let arrayNotasAtleta = [
  { nota: 9.0 },
  { nota: 6.8 },
  { nota: 7.9 },
  { nota: 8.8 },
  { nota: 9.9 },
  { nota: 7.8 },
  { nota: 8.4 },
];

// vai receber a melhor e pior nota e calcular
let arrayNotas = [];

const melhorNota = arrayNotasAtleta.reduce((a, b) => {
  if (b.nota > a.nota) {
    a = b;
  }
  return a;
});

const piorNota = arrayNotasAtleta.reduce((a, b) => {
  if (b.nota < a.nota) {
    a = b;
  }
  return a;
});

arrayNotas.push(melhorNota, piorNota);
arrayNotasAtleta.splice(1, 1);
arrayNotasAtleta.splice(3, 1);

//calcular Notas do atleta e media
let totalMedia = 0;
for (i = 0; i < arrayNotas.length; i++) {
  totalMedia += arrayNotas[i].nota / arrayNotas.length;
}
console.log(" media da melhor e pior nota " + totalMedia);

//calcular Notas restantes
let totalResNotas = 0;
for (i = 0; i < arrayNotasAtleta.length; i++) {
  totalResNotas += arrayNotasAtleta[i].nota;
}
console.log(" media dos restantes da notas " + totalResNotas);
