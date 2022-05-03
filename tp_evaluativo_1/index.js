function calcular_descuento() {
  if (Autardo == 1) {
    const precioF = 1950000;

    const descuentoF = (precio * 0, 05);

    const precioFiesta = precioF - descuentoF;

    console.log(precioFiesta);
}

  if (Autardo == 2) {
    const precioFc = 2560000;

    const descuentoFc = (precioFc * 0, 10);

    const precioFocus = precioFc - descuentoFc;
  }

  if (Autardo == 3) {
    const precioK = 1750000;

    const descuentoK = (precioK * 0, 15);

    const precioKa = precioK - descuentoK;
  }
}

const Autardo = document.getElementById("inp_auto").value;

const boton = document.getElementById("btn_calcular").value;
boton.addEventListener("click", calcular_descuento);