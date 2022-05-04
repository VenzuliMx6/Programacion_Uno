let lenguajes = [
  "Python",
  "JavaScript",
  "Csharp",
  "C++",
  "Java",
  "PHP",
  "Ruby",
];

const imprimirL_arreglo = () => {
  console.log(`La longitud del arreglo es de: ${lenguajes.length} `);
};

const imprimir_ultimo = () => {
  let ultimo_elemento = lenguajes[lenguajes.length - 1];

  console.log(`El último elemento del arreglo es: ${ultimo_elemento} `);
};

const imprimir_tercero = () => {
  let tercero = lenguajes[lenguajes.length - 4];

  console.log(`El tercer elemento del arreglo es: ${tercero}`);
};

//BOTÓN PRIMER FUNCIÓN IMPRIMIR LONGITUD
const boton_lenght = document.getElementById("btn_longitud");
boton_lenght.addEventListener("click", imprimirL_arreglo);

//BOTÓN PARA MOSTRAR ÚLTIMO ELEMENTO DEL ARRELGLO
const boton_L = document.getElementById("btn_lastelement");
boton_L.addEventListener("click", imprimir_ultimo);

//BOTÓN PARA MOSTRAR EL TERCER ELEMENTO DEL ARREGLO
const boton_T = document.getElementById("btn_tercero");
boton_T.addEventListener("click", imprimir_tercero);

//SEGUNDA FUNCIÓN - EJERCICIO 2

const imprimir_foreach = () => {
  lenguajes.forEach((element, index) => {
    console.log(`
    ${element} - ${index}
    `);
  });
};

//BOTON PARA SEGUNDA FUNCIÓN EJERCICIO 2
const botonFor = document.getElementById("btn_for");
botonFor.addEventListener("click", imprimir_foreach);

const agregar_elementoGo = () => {
  lenguajes.push("Go");
  console.log(lenguajes);
};

const boton_Go = document.getElementById("btn_go");
boton_Go.addEventListener("click", agregar_elementoGo);

const eliminar_primer_elemento = () => {
  let eliminarP = lenguajes.shift();
  console.log(lenguajes);
};

const botondelete = document.getElementById("btn_delete");
botondelete.addEventListener("click", eliminar_primer_elemento);

const agregar_elemento_Kotlin = () => {
  let primerF = lenguajes.unshift("Kotlin");
  console.log(lenguajes);
};

const botonKotlin = document.getElementById("btn_kotlin");
botonKotlin.addEventListener("click", agregar_elemento_Kotlin);

const element_splice = () => {
  lenguajes.splice(4, 5);
  console.log(lenguajes);
};

const btn_splice = document.getElementById("btn_splice");
btn_splice.addEventListener("click", element_splice);
