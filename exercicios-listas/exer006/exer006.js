// aqui voce pode implementar para inputs
let nota1 = Number(prompt("valor da nota 1"));
let nota2 = Number(prompt("valor da nota 2"));
let nota3 = Number(prompt("valor da nota 3"));
let nota4 = Number(prompt("valor da nota 4"));

let array = [];

let total = (nota1 + nota2 + nota3 + nota4) / 4;
array.push(total);
console.log(total);

let alunoMaiorMedia = array.filter((el) => el > 7);
console.log(alunoMaiorMedia);
