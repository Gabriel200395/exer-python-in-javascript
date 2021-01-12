let nome = "GAbRiel";
nome = nome.split("");
let contador = 0;

// ai pode ser feliz validando com qualquer tipo de letra Consoante
console.log(nome[0] === "G" ? (contador += 1) : "não e consoante");
console.log(nome[1] === "A" ? (contador += 1) : "não e consoante");
console.log(nome[3] === "R" ? (contador += 1) : "não e consoante");
