let alunos = [
  { aluno: "Gabriel", altura: 2.4 },
  { aluno: "jeferson", altura: 1.95 },
  { aluno: "lucas", altura: 1.4 },
  { aluno: "joão", altura: 1.8 },
  { aluno: "mateus", altura: 1.6 },
];

alunos.sort((a, b) => (a.altura > b.altura ? 1 : -1));
console.log(alunos);
let menorAltura = alunos[0];
let maiorAltura = alunos[alunos.length - 1];
console.log(maiorAltura);
console.log(menorAltura);
