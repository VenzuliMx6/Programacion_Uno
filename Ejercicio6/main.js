let marcas = [
  "Ford",
  "Renault",
  "Volkswagen",
  "Seat",
  "Peugeot",
  "Chevrolet",
  "Fiat",
  "Toyota",
  "Chery",
];

console.log(marcas)

console.log(`
    La cantidad de marcas son: ${marcas.length}
`)

let ultima_marca = marcas[marcas.length-1];
console.log(`
    La última marca registrada es: ${ultima_marca}
`)

marcas.forEach((element, index) => {
    console.log(`
    ${index} - ${element}
    `)

});

/* Agregar un elemento al final del arreglo */
marcas.push("Mitsubishi")
console.log(marcas)

/* Cómo eliminar el último elemento de un arreglo */
marcas.pop()
console.log(marcas)

/* Cómo agregar un elemento al inicio de un arreglo */
marcas.unshift("Alfa Romeo")
console.log(marcas)

/* Cómo encontrar los índices de un elemento de un array */
let indice = marcas.indexOf("Toyota")
console.log(`
    El índice del elemento toyoya es: ${indice}
`)

/* Eliminar un elemento según su índice */
marcas.splice(4, 2)
console.log(marcas)

let marcass_con_2_s = marcas.splice()

//Se agrega un elemento al arreglo original
marcass_con_2_s.push("Lexus")
console.log(marcass_con_2_s)