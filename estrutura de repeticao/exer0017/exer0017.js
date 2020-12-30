function fatorial(num) {
  let resultado = 1;
  for (i = 1; i <= num; i++) {
    console.log((resultado *= i));
  }
  return resultado;
}

fatorial(5);

// function recursividade(num) {
//   if (num == 0) {
//     return 1;
//   } else {
//     return num * recursividade(num - 1);
//   }
// }
// console.log(recursividade(5));
