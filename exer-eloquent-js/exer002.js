for (let current = 1; current <= 100; current++) {
  let output = "";
  if (current % 3 == 0) {
    output += "fizz";
  }
  if (current % 5 == 0) {
    output += "buzz";
  }
  console.log(output || current);
}
