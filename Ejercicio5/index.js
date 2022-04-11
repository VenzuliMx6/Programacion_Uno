const calcular_raices = (A, B, C) => {
  const raiz1 = Math.pow(B, 2) - 4 * A * C;

  const x1 = (-B - Math.sqrt(raiz1)) / (2 * A);

  const x2 = (-B + Math.sqrt(raiz1)) / (2 * A);

  return `Raiz 1= ` + x1 + ` Raiz2= ` + x2;
};

const mostrar_resultado = () => {
  const A = document.getElementById("inp_datoA").value;
  const B = document.getElementById("inp_datoB").value;
  const C = document.getElementById("inp_datoC").value;

  const respuesta = calcular_raices(A, B, C);
  document.getElementById("h1_lol").textContent = respuesta;
};

const boton = document.getElementById("btn_calcular");
boton.addEventListener("click", mostrar_resultado);
