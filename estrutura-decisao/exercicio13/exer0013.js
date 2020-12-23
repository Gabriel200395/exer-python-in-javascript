function diaDeSemana() {
  let dia = Number(document.getElementById("semana").value);

  switch (dia) {
    case 1:
      console.log(`${dia} - Domingo`);
      break;
    case 2:
      console.log(`${dia} - Segunda`);
      break;
    case 3:
      console.log(`${dia} - Terça`);
      break;
    case 4:
      console.log(`${dia} - Quarta`);
      break;
    case 5:
      console.log(`${dia} - Quinta`);
      break;
    case 6:
      console.log(`${dia} - Sexta`);
      break;
    case 7:
      console.log(`${dia} - Sabado`);
      break;
    default:
      console.log("valor indefinido");
  }
}
