function validarDados() {
  let nome = document.getElementById("nome").value;
  let senha = document.getElementById("senha").value;
  nome = nome.split(" ");
  senha = senha.split(" ");

  for (i = 0; i < nome.length; i++) {
    for (i = 0; i < senha.length; i++) {
      if (nome[i].length === 0 || senha.length[i] === 0) {
        console.log("preenchar os campos");
      } else if (nome[i] === senha[i]) {
        console.log("senha invalidar");
      } else if (senha[i].length <= 8) {
        console.log("senha valida");
      }
    }
  }

  // validar o nome
  // validar senha
  // validar senha nao pode ser igual ao nome
}
