function verificarSalario() {
  let valor = document.getElementById("valor").value;
  let horas = document.getElementById("horas").value;
  let mes = document.getElementById("mes").value;
  let resposta = document.getElementById("res");
  let salaraioAtual = Number(valor) * Number(horas) * Number(mes);
  let impostoRenda = Number(salaraioAtual) * 0.11;
  let inss = Number(salaraioAtual) * 0.08;
  let sindicato = Number(salaraioAtual) * 0.05;
  let salarioLiquido = salaraioAtual - (impostoRenda + inss + sindicato);

  resposta.innerHTML = `Salário Bruto : R$ ${salaraioAtual} <br /> 
  IR R$: ${impostoRenda} 
  <br /> 
  Inss R$: ${inss} 
  <br /> 
  Sindicato R$: ${sindicato}
  <br /> 
  Salario-liquido: ${salarioLiquido}
  
  `;
}
