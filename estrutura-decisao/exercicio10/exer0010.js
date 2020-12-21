const turno = prompt(
  "Olá, que turno você estudar? M-matutino, V-vespertino, N-noturno."
);

switch (turno) {
  case "M":
    alert(`${turno} - Matutino, Bom dia!`);
    break;
  case "V":
    alert(`${turno} - Vespertino, Boa tarde!`);
    break;
  case "N":
    alert(`${turno} - Noturno, Boa noite!`);
    break;
  default:
    alert("Valor Inválido!");
}
