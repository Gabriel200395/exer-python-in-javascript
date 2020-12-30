let x = 600;

function fibonacci(num) {
  if (num < 1000) {
    return num - 1;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

console.log(fibonacci(x));
