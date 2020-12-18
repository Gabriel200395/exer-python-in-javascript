function verificarVelocidade() {
  let tamanho = document.getElementById("ar").value;
  let velocidade = document.getElementById("vl").value;
  let resposta = document.getElementById("res");

  let segundos = (tamanho * 8) / velocidade;
  let minutos = segundos / 60;
  segundos = segundos % 60;

  resposta.innerHTML = `O tempo total para
   download será de",minutos ,"${minutos.toFixed(
     0
   )} e",segundos,${segundos.toFixed(0)}`;
}
