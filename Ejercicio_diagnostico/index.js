let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numerospares = [];

numeros.forEach((element) => {
  

  if ((element % 2) == 0) {

    numerospares.push(element);
  }
});

console.log(numerospares);

let intervalo = []

for (const element of numeros) {
    if(element > 2 && element < 9) {

        intervalo.push(element)

    }
}
console.log(intervalo)