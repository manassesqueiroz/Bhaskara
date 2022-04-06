function resultado() {
  var valor1 = document.getElementById("txtn1");
  var valor2 = document.getElementById("txtn2");
  var valor3 = document.getElementById("txtn3");
  var del = document.getElementById("del");
  var res = document.getElementById("res");
  del.innerHTML = "";
  res.innerHTML = "";
  var n1 = Number(valor1.value);
  var n2 = Number(valor2.value);
  var n3 = Number(valor3.value);
  var res1 = n2 * n2 - 4 * n1 * n3;
  var t1 = n1 * 2;
  var raiz = Math.sqrt(res1);
  var p1 = -n2 + raiz;
  var p2 = -n2 - raiz;
  var j1 = p1 / t1;
  var j2 = p2 / t1;

  del.innerHTML += ` &Delta; ${res1}`;

  res.innerHTML += `X<sup>1</sup>=${j1}------------X<sup>2</sup>=${j2}`;
}
