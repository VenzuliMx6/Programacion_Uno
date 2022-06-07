let consolas = [
  "PlayStation",
  "Xbox",
  "Nintendo Game Cube",
  "Sega Dreamcast",
  "Game Boy Anvanced",
  "Pokemon Mini",
];

consolas.push("Nintendo 64");
console.log(consolas);

consolas.splice(4, 2);
console.log(consolas);

const mostrar_arreglo = () => {
  const l_array = `La longitud del array es: ${consolas.length}`;

  document.getElementById("h4_length").textContent = l_array;

  const last_element = consolas[consolas.length - 1];
  const le_array = `El último elemento del arreglo es: ${last_element}`;

  document.getElementById("h4_le").textContent = le_array;

  const elementpos4 = `El elemento de la cuarta posición es: ${consolas[4]}`;
  document.getElementById("fourth_element").textContent = elementpos4;
};

const boton = document.getElementById("btn_array");
boton.addEventListener("click", mostrar_arreglo);
