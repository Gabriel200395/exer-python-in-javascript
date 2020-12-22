function nomeChar(string, ch) {
  let counter = 0;
  for (i = 0; i < string.length; i++) {
    if (string[i] == ch) {
      counter += 1;
    }
  }
  return counter;
}

function nome(string) {
  return nomeChar(string, "G");
}

console.log(nomeChar("GGG", "G"));
