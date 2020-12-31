//função recursiva: são funções que chamar por si mesma na função
function power(base, expoent) {
  if (expoent == 0) {
    return 1;
  } else {
    // multiplicar ou exponiação
    return base * power(base, expoent - 1);
  }
}
console.log(power(2, 3));
