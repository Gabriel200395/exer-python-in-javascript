let x = 10;

function fibonacci(num) {
  if (num <= 2) {
    return num - 1;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

console.log(fibonacci(x));
