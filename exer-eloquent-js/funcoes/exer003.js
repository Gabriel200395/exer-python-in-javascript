let size = 8;
let boader = "";

for (let x = 0; x < size; x++) {
  for (let y = 0; y < size; y++) {
    if ((x + y) % 2 == 0) {
      boader += " ";
    } else {
      boader += "#";
    }
  }
  boader += "\n";
}

console.log(boader);
