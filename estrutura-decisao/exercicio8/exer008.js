function vericarPreço() {
  let preco1 = document.getElementById("tenis-nike").value;
  let preco2 = document.getElementById("tenis-adidas").value;
  let preco3 = document.getElementById("tenis-oakley").value;

  if (Number(preco1) < Number(preco2) && Number(preco1) < Number(preco3)) {
    console.log(`O tenis mais barato eo da nike sugiru compra ele ${preco1}`);
  } else if (
    Number(preco2) < Number(preco1) &&
    Number(preco2) < Number(preco3)
  ) {
    console.log(`O tenis mais barato eo da adidas sugiru compra ele ${preco2}`);
  } else if (
    Number(preco3) < Number(preco1) &&
    Number(preco3) < Number(preco2)
  ) {
    console.log(`O tenis mais barato eo da oakley sugiru compra ele ${preco3}`);
  }
}
