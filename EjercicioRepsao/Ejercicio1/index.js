function calcular_temp(Cc) {
 
  const Farenheit = (Cc * 1.8) + 32;

  return `Farenheit: ` +Farenheit;
}

function tomar_dato() {
  
    const Cc = document.getElementById("inp_temp").value;

  const respuesta = calcular_temp(Cc);
  document.getElementById("h1_lol").textContent = respuesta;
}

const boton = document.getElementById("btn_calcular");
boton.addEventListener("click", tomar_dato);
