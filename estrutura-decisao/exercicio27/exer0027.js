alert(
  "Olá seja bem vindo ao nosso verdurão! " +
    " OBS:acima de 5KG o valor tera um desconto de 10% "
);
let fruta = prompt("escreva a fruta que gostaria??");
let quilo = Number(prompt("informe a quantidade quilo"));

let maca5kg = 1.8;
let morango5kg = 2.5;
let maca5kgAcima = 2.2;
let morango5kgmaca5kgAcima = 1.5;

if (fruta === "maçã" && quilo <= 5) {
  let maca5kg = 1.8;
  let precoNormal = quilo * maca5kg;
  console.log(
    " O preco total a pagar " +
      precoNormal.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })
  );
} else if (fruta === "morango" && quilo <= 5) {
  let precoNormal = quilo * morango5kg;
  console.log(
    " O preco total a pagar  " +
      precoNormal.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })
  );
} else if (fruta === "maçã" && quilo > 5) {
  let desconto = 0.1;
  let precoAumento = quilo * maca5kgAcima;
  let total = precoAumento - desconto;
  console.log(
    " O preco total a pagar " +
      total.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      }) +
      " com desconto de 10%"
  );
} else if (fruta === "morango" && quilo > 5) {
  let desconto = 0.1;
  let precoAumento = quilo * morango5kgAcima;
  let total = precoAumento - desconto;
  console.log(
    "O preco total a pagar" +
      total.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      }) +
      " com desconto de 10%"
  );
}
