function verificarSexo() {
  let sexo = document.getElementById("sexo").value;
  if (sexo === "M") {
    console.log(`${sexo} - Masculino`);
  } else if (sexo === "F") {
    console.log(`${sexo} - Femenino`);
  } else {
    console.log("sexo invalido");
  }
}
