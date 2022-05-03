function calcular_descuento() {
  const auto = document.getElementById("inp_auto").value;

  if (auto == 1) {
    const precio_FordKa = 1750000;

    const descuento_Ka = precio_FordKa * 0.15;

    const precio_descontado_Ka = precio_FordKa - descuento_Ka;

    const presupuesto1 = precio_descontado_Ka;

    document.getElementById("h1_auto").textContent =
      "Ford Ka: $" + presupuesto1;
  } else if (auto == 2) {
    const precioFiesta = 1950000;

    const descuentoFiesta = precioFiesta * 0.05;

    const preciodesc_Fiesta = precioFiesta - descuentoFiesta;

    const presupuestoFiesta = preciodesc_Fiesta;

    document.getElementById("h1_auto").textContent =
      "Ford Fiesta : $" + presupuestoFiesta;
  } else if (auto == 3) {
    const precioFocus = 2560000;

    const descuentoFocus = (precioFocus * 0, 10);

    const preciodesc_Focus = precioFocus - descuentoFocus;

    const presupuestoFocus = preciodesc_Focus;

    document.getElementById("h1_auto").textContent =
      "Ford Focus $" + presupuestoFocus;
  }
}

const boton = document.getElementById("btn_auto");
boton.addEventListener("click", calcular_descuento);
