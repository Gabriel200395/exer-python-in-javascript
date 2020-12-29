for (numero = 1; numero <= 50; numero++) {
  let output = "";
  if (numero % 2 == 0) {
    output = "buzz";
  }
  console.log(output || numero);
}
