function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

// var twice = multiplier(2);
// console.log(twice(5));

// function fontTexto(size) {
//   return function () {
//     let texto = (document.getElementById("font").style.fontSize = size + "px");
//   };
// }

// function fontTexto1(size) {
//   return function () {
//     let texto = (document.getElementById("font").style.fontSize = size + "px");
//   };
// }

var font = fontTexto(16);
var font1 = fontTexto1(40);

function minhaBiblioteca() {
  return {
    add5() {
      return 10 + 5;
    },
    add10() {
      return 10 + 5;
    },
  };
}

console.log(minhaBiblioteca.add5());
console.log(minhaBiblioteca.add10());
