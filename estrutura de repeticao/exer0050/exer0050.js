let isInicio = 1;
let hasFim = 9;
let total = 0;
let n = 0;
for (count = isInicio; count <= hasFim; count += 2) {
  n += 1;
  total += n;
  console.log(n + "/" + count);
}
console.log("A soma dos termos e: " + total);
