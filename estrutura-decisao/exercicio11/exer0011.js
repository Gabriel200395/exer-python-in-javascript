function colaboradorSalario() {
  let salario = document.getElementById("salario").value;
  let resposta = document.getElementById("res");
  let sl1 = 0.2;
  let sl2 = 0.15;
  let sl3 = 0.1;
  let sl4 = 0.05;

  if (salario <= 280) {
    let valorAumento = Number(sl1) * Number(salario);
    let salarioAumento = Number(valorAumento) + Number(salario);
    resposta.innerHTML = `o salário antes do reajuste ${salario}
     <br />  
     o percentual de aumento aplicado ${sl1} %;
     <br />  
     o valor do aumento ${valorAumento};
     <br />  
     o novo salário, após o aumento ${salarioAumento}.
    `;
    console.log(salarioAumento);
  } else if (salario > 280 && salario <= 700) {
    let valorAumento = Number(sl2) * Number(salario);
    let salarioAumento = Number(valorAumento) + Number(salario);
    resposta.innerHTML = `o salário antes do reajuste$ ${salario}
     <br />  
     o percentual de aumento aplicado ${sl2} %;
     <br />  
     o valor do aumento ${valorAumento};
     <br />  
     o novo salário, após o aumento ${salarioAumento}.
    `;
    console.log(salarioAumento);
  } else if (salario > 700 && salario <= 1500) {
    let valorAumento = Number(sl3) * Number(salario);
    let salarioAumento = Number(valorAumento) + Number(salario);
    resposta.innerHTML = `o salário antes do reajuste$ ${salario}
     <br />  
     o percentual de aumento aplicado ${sl3} %;
     <br />  
     o valor do aumento ${valorAumento};
     <br />  
     o novo salário, após o aumento ${salarioAumento}.
    `;
  } else if (salario > 1500) {
    let valorAumento = Number(sl4) * Number(salario);
    let salarioAumento = Number(valorAumento) + Number(salario);
    resposta.innerHTML = `o salário antes do reajuste$ ${salario}
     <br />  
     o percentual de aumento aplicado ${sl4} %;
     <br />  
     o valor do aumento ${valorAumento};
     <br />  
     o novo salário, após o aumento ${salarioAumento}.
    `;
  }
}
