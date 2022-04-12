/* ARREGLOS
las posiciones se llaman ÍNDICE o INDEX, cada dato del arreglo es un ELEMENTO
Puede almacenar tipo number, string, booleanos...
let mi_arreglo = [3, 5, 11, 22 ,1] */

let helados = ["Menta granizada1", "Menta granizada2", "Menta granizada3"];

/* Mostrar longitud del arreglo */
console.log(`
Longitud = ${helados.length}
`);

/* Acceso a un elemento de un arreglo mediante su índice */

/* Acceder al último elemento */
let ultimo_elemento = helados[helados.length - 1];
console.log(`
Last element = ${ultimo_elemento} 
`);


/* Recorrer un arreglo haciendo uso del foreach */

helados.forEach( (element, index) => {
    console.log(`
    ${index} - ${element}
    `)
});

/* Cómo agregar un elemento al final del arreglo */
helados.push("Menta granizada4");
console.log(helados)


/* Cómo eliminar el último elemento de un arreglo */
helados.pop()
console.log(helados)

/* Cómo agregar un elemento al inicio de un arreglo */
helados.unshift("Menta granizada5")
console.log(helados)

/* Cómo eliminar el primer elemento de un arreglo */
helados.shift()
console.log(helados)

/* Cómo encontrar los índices de un elemento de un array */
let indice = helados.indexOf("Menta granizada2")
console.log(`
    Posición del elemento Menta granizada2 = ${indice}
`)

/* Eliminar un elemento según su índice */
helados.splice(indice, deleteCount = 1)
console.log(helados)

/* Eliminar varios elementos del arreglo */
helados.splice(0, 2)
console.log(helados)

/* Cómo clonar un arreglo (Agregar valores primero) */

//Se agrega un elemento al arreglo original
helados.push("Marroc")
let copia_helados = helados.slice()

//Se agrega un elemento al arreglo copia
copia_helados.push("Chocolate")

//Arreglo original
console.log(helados)

//Arreglo copia
console.log(copia_helados)