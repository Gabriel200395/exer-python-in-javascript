const users = [
  { id: 1, name: "jhon", age: 10 },
  { id: 2, name: "Alice", age: 11 },
  { id: 3, name: "Mary", age: 27 },
  { id: 4, name: "Ronald", age: 33 },
  { id: 5, name: "Louis", age: 15 },
];

// funcoes de ordem superior
function listaIdade(array, idadeMedia, validar) {
  return idadeMedia(array), validar(array);
}

function validar(d) {
  console.log(d);
  return d;
}

// let idadeM = 0;
// for (i = 0; i < n.length; i++) {
//   idadeM += n[i].age / 5;
// }
// return console.log(idadeM.toFixed(0));

function idadeMedia(n) {
  const red = n.reduce((el, user) => {
    return el + user.age / 2;
  }, 0);
  console.log(red);
}

listaIdade(users, idadeMedia, validar);
console.log(
  "------------------------------------------------------------------------------------------"
);

// filtrar dados com js

function mapearD(array, lista) {
  let arrayNovo = [];
  for (i = 0; i < array.length; i++) {
    if (array[i].age > 18) {
      arrayNovo.push(lista(array[i].age));
    }
  }
  return arrayNovo;
}

console.log(
  "------------------------------------------------------------------------------------------"
);

//você pode formatar os dados
var string = JSON.stringify({ name: "X", born: 1980 });
console.log(string);
// mesma coisa
var ancestry = JSON.parse(ANCESTRY_FILE);
console.log(ancestry.length);
