function verficarTriangulo() {
  let lado1 = Number(document.getElementById("lado1").value);
  let lado2 = Number(document.getElementById("lado2").value);
  let lado3 = Number(document.getElementById("lado3").value);
  let triangulo = lado1 + lado2;

  if (triangulo > lado3) {
    console.log("ele e um triângulo");
  } else if (lado1 === lado2) {
    console.log("ele e Triângulo Isósceles");
  } else if ((lado1 != lado2) != lado3) {
    console.log("Triângulo Escaleno");
  }
}
