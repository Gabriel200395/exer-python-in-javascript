function verifcarSalario() {
  let valorHora = document.getElementById("valor").value;
  let horasTrabalhadas = document.getElementById("horas").value;
  let diasTrabalhados = document.getElementById("mes").value;

  calcular(valorHora, horasTrabalhadas, diasTrabalhados);
}

function calcular(valor, hora, dias) {
  //tabela de descontos
  let des1500 = 0.05;
  let des2500 = 0.1;
  let des2500Acima = 0.2;
  let descInss = 0.1;
  let descFgts = 0.11;

  let calcularValorPg = Number(valor) * Number(hora) * Number(dias);
  descontoIr(
    calcularValorPg,
    des1500,
    des2500,
    des2500Acima,
    descInss,
    descFgts
  );
}

function descontoIr(
  salario,
  des1500,
  des2500,
  des2500Acima,
  descInss,
  descFgts
) {
  if (salario <= 900) {
    console.log("não tera desconto");
  } else if (salario > 900 && salario <= 1500) {
    let calcularDesconto = Number(des1500) * Number(salario);
    let descontInss = Number(descInss) * Number(salario);
    let descontFgts = Number(descFgts) * Number(salario);
    let descontosTotal =
      Number(calcularDesconto) + Number(descontInss) + Number(descontFgts);
    let pagamento = Number(salario) - Number(descontosTotal);

    criarElemento(
      calcularDesconto,
      descontInss,
      descontFgts,
      descontosTotal,
      salario,
      pagamento
    );
  } else if (salario > 1500 && salario <= 2500) {
    let calcularDesconto = Number(des2500) * Number(salario);
    let descontInss = Number(descInss) * Number(salario);
    let descontFgts = Number(descFgts) * Number(salario);
    let descontosTotal =
      Number(calcularDesconto) + Number(descontInss) + Number(descontFgts);
    let pagamento = Number(salario) - Number(descontosTotal);

    criarElemento(
      calcularDesconto,
      descontInss,
      descontFgts,
      descontosTotal,
      salario,
      pagamento
    );
  } else if (salario > 2500) {
    let calcularDesconto = Number(des2500Acima) * Number(salario);
    let descontInss = Number(descInss) * Number(salario);
    let descontFgts = Number(descFgts) * Number(salario);
    let descontosTotal =
      Number(calcularDesconto) + Number(descontInss) + Number(descontFgts);
    let pagamento = Number(salario) - Number(descontosTotal);

    criarElemento(
      calcularDesconto,
      descontInss,
      descontFgts,
      descontosTotal,
      salario,
      pagamento
    );
  }
}

function criarElemento(
  calcularDesconto,
  descontInss,
  descontFgts,
  descontosTotal,
  salario,
  pagamento
) {
  let resposta = document.getElementById("res");
  resposta.innerHTML = ` Salário Bruto: ${salario}
  <br /> 
  IR:${calcularDesconto}
  <br />
  INSS: ${descontInss}
  <br /> 
  FGTS: ${descontFgts}
  <br /> 
  Total de descontos : ${descontosTotal}
  <br />
  Salário Liquido : ${pagamento}
  `;
}
