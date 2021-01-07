let tabela = [];

function addicionarValorTabela() {
  let valor = document.getElementById("tabela").value;
  if (valor.length == 0) {
    console.log("escreva algum valor");
  } else {
    addicionarElementoArray(valor, percorrerArray);
  }
}

function addicionarElementoArray(valor, percorrerArray) {
  tabela.push(valor);
  return percorrerArray(tabela, criarElemento);
}

function percorrerArray(tabela, criarElemento) {
  for (pos in tabela) return criarElemento(tabela[pos]);
}

function criarElemento(el) {
  let resposta = document.getElementById("res");
  resposta.innerHTML += ` <br / >${el}`;
}
