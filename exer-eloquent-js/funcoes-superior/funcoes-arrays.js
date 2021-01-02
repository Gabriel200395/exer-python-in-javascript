let ancestry = [
  {
    name: "Emma de Milliano",
    sex: "f",
    born: 1876,
    died: 1956,
    father: "Petrus de Milliano",
    mother: "Sophia van Damme",
  },
  {
    name: "Carolus Haverbeke",
    sex: "m",
    born: 1832,
    died: 1905,
    father: "Carel Haverbeke",
    mother: "Maria van Brussel",
  },
];

function map(array, transform) {
  let arrayNovo = [];
  for (i = 0; i < array.length; i++) {
    arrayNovo.push(transform(array[i]));
  }
  return arrayNovo;
}

const filtrar = ancestry.filter(function (person) {
  return person.died - person.born > 60;
});

console.log(
  map(filtrar, function (person) {
    return person.name;
  })
);
