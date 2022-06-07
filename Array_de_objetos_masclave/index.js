//Crear un arreglo de objetos

let vehiculos = [
  {
    marca: "Ford",
    modelo: "Focus",
    anio: 2014,
    origen: "Mercosur",
  },
  {
    marca: "Volkswagen",
    modelo: "Golf 1.4 TSI",
    anio: 2014,
    origen: "Mexico",
  },
];

/* Recorrer un array de objetos */
vehiculos.forEach( (element, index) => {
    console.log(index+'-'+element.modelo)
});

/* Funciones asincronas - Concepto de Async y Await */

const recorrer = async () => {

    /* Esto realiza una solicitud o petición HTTP a 
    través del metodo GET */
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts');

    const publicaciones = await respuesta.json()

    publicaciones.forEach(element => {
        console.log(element.title)
    });
}


const boton = document.getElementById("btn_json")
boton.addEventListener("click", recorrer)