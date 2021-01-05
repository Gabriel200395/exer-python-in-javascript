let cds = Number(prompt("informe a quantidade de cds"));
let valor = Number(prompt(" valor pago por cada um"));

function mediaVlCd() {
  let cdsComprado = 0;
  let valorCds = 0;

  while (cds && valor) {
    cdsComprado += cds;
    valorCds += valor;
    let media = (cdsComprado * valorCds) / cdsComprado;
    console.log("A media de valor pago por cd e de : " + "R$" + media + ".00");
    break;
  }
}

mediaVlCd();
