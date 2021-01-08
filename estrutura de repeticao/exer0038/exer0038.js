let tempo = Number(prompt("tempo de servico"));
let salario = Number(prompt("valor salario"));

let aumento = 0.15;
let aumentoDobro = 0.3;
let salarioAtual = 0;
let tempoAltual = 0;

function dadosFuncionario() {
  for (i = 0; i <= salario; i++) {
    salarioAtual = i;
  }
  for (i = 0; i <= tempo; i++) {
    tempoAltual = i;
  }
  calcularSalario(salarioAtual, tempoAltual);
}

function calcularSalario(salario, tempo) {
  if (tempo == 1) {
    let salarioAumento = salario * aumento + salario;
    console.log(salarioAumento);
  } else if (tempo == 2) {
    let salarioAumento = salario * aumentoDobro + salario;
    console.log(salarioAumento);
  }
}
dadosFuncionario();
