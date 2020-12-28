let perguntar = prompt("Telefonou para a vítima?");
let pergunta1 = prompt("Esteve no local do crime?");
let pergunta2 = prompt("Mora perto da vítima?");
let pergunta3 = prompt("Devia para a vítima?");
let pergunta4 = prompt("Já trabalhou com a vítima?");

if (perguntar === "sim" && pergunta1 === "sim") {
  console.log("suspeita!");
} else if (pergunta2 === "sim" && pergunta3 === "sim") {
  console.log("cumplice!");
} else if (pergunta4 === "sim") {
  console.log("assasino!");
} else {
  console.log("inocente!");
}
