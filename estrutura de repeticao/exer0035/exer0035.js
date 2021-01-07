function ehPrimo() {
  let primo = document.getElementById("primo").value;
  let divisores = 0;
  for (i = 0; i <= primo; i++)
    if (primo % i == 0) {
      divisores++;
    }
  if (divisores == 2) {
    console.log("eh Primo");
  } else {
    console.log("eh não Primo");
  }
}
