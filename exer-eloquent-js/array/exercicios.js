function range(start, end, incremento = start < end ? 1 : -1) {
  let arrayNumbers = [];
  if (incremento > 0) {
    for (i = start; i <= end; i += incremento) {
      arrayNumbers.push(i);
    }
  } else {
    for (i = start; i >= end; i += incremento) {
      arrayNumbers.push(i);
    }
  }

  return arrayNumbers;
}

function sum(array) {
  let total = 0;
  for (i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}
console.log(sum(range(1, 10)));
console.log(range(1, 10));
