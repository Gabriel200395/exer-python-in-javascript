let a = 80000;
let b = 200000;

while (a <= b) {
  a += a * 0.03;
  b += b * 0.015;
  console.log(a + " ultrapassar ou igualar " + b + " em anos ");
  break;
}
