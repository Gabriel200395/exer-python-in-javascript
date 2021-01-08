let academia = [];

function adicionarPesoAltura(nome, altura, peso) {
  if (nome.length == " " || nome.length == " " || nome.length == " ") {
    alert("preenchar os campos");
  } else {
    academia.push({ nome, altura, peso });
    tabelaDeAlturaPeso(academia, montarTabela);
  }
}

function tabelaDeAlturaPeso(array, montarTabela) {
  array.sort((a, b) => (a.altura < b.altura || a.peso < b.peso ? 1 : -1));
  return montarTabela(array);
}

function montarTabela(tabela) {
  let resposta = document.getElementById("res");
  resposta.innerHTML = "";
  tabela.forEach((element) => {
    let elemento = document.createElement("p");
    elemento.textContent = `${
      " nome: " +
      element.nome +
      " altura " +
      element.altura +
      " peso " +
      element.peso
    }`;
    resposta.appendChild(elemento);
  });
  return tabela;
}

function academiaDadosCliente() {
  let nome = document.getElementById("nome").value;
  let altura = Number(document.getElementById("altura").value);
  let peso = Number(document.getElementById("peso").value);
  adicionarPesoAltura(nome, altura, peso);
}
