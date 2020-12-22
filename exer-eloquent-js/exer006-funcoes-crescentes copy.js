function fazendeiro(number, width) {
  let string = String(number);
  while (string.length < width) string = "0" + string;
  return string;
}

function gados(vacas, galinhas, porcos) {
  console.log(fazendeiro(vacas, 3) + "vacas");
  console.log(fazendeiro(galinhas, 3) + "galinhas");
  console.log(fazendeiro(porcos, 3) + "porcos");

  // fazendeiro(vacas, "vacas");
  // fazendeiro(galinhas, "Galinhas");
  // fazendeiro(porcos, "porcos");
}

gados(7, 3, 11);
