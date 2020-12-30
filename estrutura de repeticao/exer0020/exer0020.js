function fatorial(num) {
  if (num <= 16) {
    console.log("impossivel fazer calculo com esse numero");
    return num;
  } else {
    if (num == 0) {
      return 1;
    } else {
      return num * fatorial(num - 1);
    }
  }
}

console.log(fatorial(5));
