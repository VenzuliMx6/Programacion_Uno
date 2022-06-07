import Triangulo from "./triangulo.js";

function mostrar() {
  const base = document.getElementById("inp_base").value;
  const altura = document.getElementById("inp_altura").value;

  const triangulo = new Triangulo(base, altura);
  const area_triangulo = triangulo.calcular_area();
  console.log(area_triangulo);
}
const boton_triangulo = document.getElementById("btn_calcular");
boton_triangulo.addEventListener("click", mostrar);


import Trapecio from "./trapecio.js";

function show_T() {
    const vA = document.getElementById("inp_vA").value;
    const vB = document.getElementById("inp_vB").value;
    const vH = document.getElementById("inp_H").value;


    const trapecio = new Trapecio(vA, vB, vH);
    const area_trapecio = trapecio.Calcular_T();
    console.log(area_trapecio)
}

const boton_trapecio = document.getElementById("btn_T")
boton_trapecio.addEventListener("click", show_T)


import Rectangulo from "./rectangulo.js";

function mostrar_AR() {
    const vB1 = document.getElementById("inp_BR").value;
    const vA1 = document.getElementById("inp_AR").value;


    const rectangulo = new Rectangulo(vB1, vA1);
    const area_rectangulo = rectangulo.calcular_area_R();
    console.log(area_rectangulo);
}

const botonRR = document.getElementById("btn_RR");
botonRR.addEventListener("click", mostrar_AR)

