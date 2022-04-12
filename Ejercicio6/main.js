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

marcas.push("Mitsubishi")
console.log(marcas)

marcas.pop()
console.log(marcas)

marcas.unshift("Alfa Romeo")
console.log(marcas)

let indice = marcas.indexOf("Toyota")
console.log(`
    El índice del elemento toyoya es: ${indice}
`)

marcas.splice(4, 2)
console.log(marcas)

let marcass_con_2_s = marcas.splice()

marcass_con_2_s.push("Lexus")
console.log(marcass_con_2_s)