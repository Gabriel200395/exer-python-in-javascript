let turmas = Number(prompt("informe a quantidade de turma"));
let alunos = Number(prompt("informe a quantidade de de alunos"));

function calcularMediaAlunos(validarMedia) {
  let media = (alunos * turmas) / turmas;
  return validarMedia(media);
}

function validarMedia(aluno) {
  while (aluno <= 40) {
    console.log(" media de alunos por turma " + aluno);
    break;
  }

  while (aluno > 40) {
    console.log(" media de alunos por turma ultrapassada");
    break;
  }
  return aluno;
}

calcularMediaAlunos(validarMedia);
