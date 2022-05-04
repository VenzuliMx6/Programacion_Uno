const copiar_array = () => {
  let numeros = [5, 2, 88, 14, 22, 7, 6, 42, 47, 34];

  let c_numeros = numeros.slice();

  console.log(c_numeros);
};

const btn_copia = document.getElementById("btn_copiaarray");
btn_copia.addEventListener("click", copiar_array);

const calcular_prom_array = () => {
  let numeros = [5, 2, 88, 14, 22, 7, 6, 42, 47, 34];

  suma = 0;

  numeros.forEach((element) => {
    suma += element;
    //  console.log("La suma de los elementos del arreglo es de: " + suma);

  });


  promedio = suma / numeros.length;

    console.log("El promedio es de: " + promedio);
};

const btn_prom = document.getElementById("btn_prom");
btn_prom.addEventListener("click", calcular_prom_array);
