const determinar_temperatura = (temperatura) => {
  if (temperatura >= 14 && temperatura < 32) {
    var temp_baja = "baja";

    return `la temperatura es: ` + temp_baja;
  }
  if (temperatura >= 32 && temperatura < 68) {
    var temp_adecuada = "adecuada";

    return `La temperatura es: ` + temp_adecuada;
  }
  if (temperatura >= 68 && temperatura < 96) {
    var temp_alta = "alta";

    return `La temperatura es: ` + temp_alta;
  }
  if (temperatura <= 13 && temperatura > 95) {
    var temp_indefinida = "indefinida";

    return `La temperatura es: ` + temp_indefinida;
  }
};

const tomar_temperatura = () => {
  const temperatura = document.getElementById("inp_temperatura").value;

  const valor = determinar_temperatura(temperatura);
  document.getElementById("h1_temperatura").textContent = valor;
};

const boton = document.getElementById("btn_mostrar");
boton.addEventListener("click", tomar_temperatura);
