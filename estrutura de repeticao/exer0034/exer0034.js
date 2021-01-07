function ehPrimo(a) {
  var divisores = 0;

  for (var count = 1; count <= a; count++) if (a % count == 0) divisores++;
  if (divisores == 2) console.log("É primo");
  else console.log("É não primo");
}

ehPrimo(5);
