// let legume = document.getElementById("fruta").value;
// var vegetais = ["batata", "tomate", "pimenta", "pimentao", "alface"];

// function verdurao(vegetais, legume) {
//   if (vegetais.indexOf(legume) === -1) {
//     vegetais.push(legume);
//     console.log(" esse legume  não existe no vegetal " + vegetais);
//   } else if (vegetais.indexOf(legume) > -1) {
//     console.log(" esse legume existe no vegetal " + vegetais);
//   }
// }

var vegetais = ["batata", "tomate", "pimenta", "pimentao", "espinafre"];

function addlegume(vegetais, legume) {
  if (vegetais.indexOf(legume) === -1) {
    console.log("legume adicionado com sucesso!");
  } else {
    console.log("legume jáe existente");
  }
}

addlegume(vegetais, "espinafre");
