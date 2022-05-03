function calcular_hipotenusa (lado1, lado2) {

    const cuadrado1 = Math.pow(lado1, 2);
    const cuadrado2 = Math.pow(lado2, 2);

    const C = Math.sqrt(cuadrado1+cuadrado2)

    return `C: `+C;

}
function tomar_datos () {

    const lado1 = document.getElementById("inp_lado1").value;
    const lado2 = document.getElementById("inp_lado2").value;

    const cateto1 = calcular_hipotenusa(lado1);
    const cateto2 = calcular_hipotenusa(lado2);


    const respuesta = calcular_hipotenusa(lado1, lado2);
    document.getElementById("h4_h4").textContent = respuesta

}

const boton = document.getElementById("btn_calcular");
boton.addEventListener("click", tomar_datos);

