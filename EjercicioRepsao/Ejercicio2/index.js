const determinar_validez = (a1, a2, a3) => {
  const suma = a1 + a2 + a3;

  const validez = (suma == 180) ? "Es un triángulo." : "No es un triángulo.";
  alert(validez);
};

const tomar_datos = () => {
  const angulo1 = document.getElementById("inp_ang1").value;

  const angulo2 = document.getElementById("inp_ang2").value;

  const angulo3 = document.getElementById("inp_ang3").value;

  const dato1 = determinar_validez(angulo1)

  const dato2 = determinar_validez(angulo2)

  const dato3 = determinar_validez(angulo3)
};

const boton = document.getElementById("btn_calcular");
boton.addEventListener("click", determinar_validez)