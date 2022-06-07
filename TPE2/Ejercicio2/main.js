let criptomonedas = [
  "Bitcoin",
  "Ethereum",
  "Tether",
  "BNB",
  "Cardano",
  "Dai",
  "Helium",
  "Shiba Inu",
  "Tron",
  "Cronos",
  "Solana",
];

//Agregar nuevo elemento al principio del arreglo
let new_element = criptomonedas.unshift("Stellar");

//Eliminar los elementos Shiba Inu y Tron en base a sus posiciones
let deleted_elements = criptomonedas.splice(8, 2);

//Agregar un elemento al final del arreglo
let last_element = criptomonedas.push("Gate");

const exponer_arreglo = () => {
  //Mostrar longitud del arreglo
  const array_length = `La longitud del arreglo es de: ${criptomonedas.length}`;
  document.getElementById("p_length").textContent = array_length;

  let final_element = criptomonedas[criptomonedas.length - 1];
  document.getElementById("pf_element").textContent = final_element;

  let seventh_element = criptomonedas[7];
  document.getElementById("77_element").textContent = seventh_element;
};

const button = document.getElementById("btn_show_array");
button.addEventListener("click", exponer_arreglo);


